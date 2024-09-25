import React, { useEffect, useState } from "react";
import ApiFacade from '../../api/facade'
import "./FormComponent.css";
import title from "../../images/title_img.png"
import mail from "../../images/form_mail_box.png"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { ShimmerTitle } from 'react-shimmer-effects';
import ReCAPTCHA from 'react-google-recaptcha';




const FormComponent = () => {

  const [appointmentSectionData, setAppointmentSectionData] = useState(null);
  const [appointmentLoading, setAppointmentLoading] = useState(true);

  const [selectedServices, setSelectedServices] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);


  // Add a service to selected list
  const handleServiceSelect = (e) => {
    const selectedService = e.target.value;
    if (selectedService && !selectedServices.includes(selectedService)) {
      setSelectedServices([...selectedServices, selectedService]);
    }
  };

  // Remove a service from selected list
  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((item) => item !== service));
  };

  // This function will trigger when captcha is successfully solved
  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };



  const [allServiceData, setAllServiceData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',

  });

  const [preferenceItems, setPreferenceItems] = useState(null);

  useEffect(() => {
    const loadPreference = async () => {
      try {
        const data = await ApiFacade.fetchPreferenceData();
        setPreferenceItems(data);
      } catch (error) {
        console.error("Error loading preference data:", error);
      }
    };

    loadPreference();
  }, []);

  useEffect(() => {
    const loadAppointmentSection = async () => {
      try {
        const data = await ApiFacade.fetchAppointmentSection();
        setAppointmentSectionData(data);
      } catch (error) {
        console.error("Error loading appointment section data:", error);
      } finally {
        setAppointmentLoading(false);
      }
    };

    loadAppointmentSection();
  }, []);


  useEffect(() => {
    const loadAllServiceData = async () => {
      try {
        const data = await ApiFacade.fetchAllServices();
        setAllServiceData(data);
      } catch (error) {
        console.error('Error loading services:', error);
      }
    };

    loadAllServiceData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!captchaToken) {
      toast.warn("Please verify that you are not a robot!");
      return;
    }
    if (selectedServices.length === 0) {

      toast.warn("Please select at least one service!");
      return;
    }
    try {
      // Create customer
      const customerPayload = {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        customer_address: formData.address
      };
      const customerResponse = await ApiFacade.createCustomer(customerPayload);

      // Create quotation
      const quotationPayload = {
        // Use the created customer ID/name
        customer: customerResponse.name,
        appointment_date: formData.date,
        items: selectedServices.map(service => ({
          service: service,
        })),
      };
      const quotationResponse = await ApiFacade.createQuotation(quotationPayload);

      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        areaCode: '',
        service: '',
        date: '',
        time: '',
      });

      setSelectedServices([]);

      if (quotationResponse) {
        toast.success('Appointment submitted successfully!');
      } else {
        toast.error('There is something wrong!');
      }


    } catch (error) {
      toast.error('There was an error processing your request.');

    }
  };


  return (
    <>
      <ToastContainer position="bottom-right" />

      <section class="troo_da_form_wrappper">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="form_left">
                <div class="troo_da_hero_small_outer d-flex">
                  <div class="troo_da_small_title_img zoom-in-zoom-out">
                    <img src={title} alt="title_img" />
                  </div>
                  <div class="troo_da_hero_left_small_title">
                    <h4>Feel appointmet form</h4>
                  </div>
                </div>
                {appointmentLoading ? (
                  <ShimmerTitle line={2} gap={10} />
                ) : (
                  <>
                    <div class="form_title">
                      <h2>{appointmentSectionData?.title}</h2>

                    </div>

                    <div class="form_content">
                      <p>
                        {appointmentSectionData?.sub_title}
                      </p>
                    </div>
                  </>
                )}
                <div class="form_msg_box_outer d-flex">
                  <div class="form_msg_txt">
                    <h4>In emergency?</h4>
                  </div>
                  <div class="form_msg_img_outer d-flex">
                    <div class="form_msg_img">
                      <img
                        src={mail}
                        alt="form_mail_box"
                      />
                    </div>
                    <div class="form_number">
                      {preferenceItems?.phone_numbers.slice(0, 1).map((num, i) => (
                        <a key={i} href={`tel:${num.phone}`}>{num.phone}</a>

                      ))}


                      <br />


                      {preferenceItems?.email_addresses.slice(0, 1).map((mail, i) => (
                        <a key={i} href={`mailto:${mail.email}`}>{mail.email}</a>
                      ))}
                    </div>
                  </div>
                </div>
                <div class="people_choose_btn">
                  <Link to="/Home/Contact_Us">
                    <button type="button" class="btn btn-primary">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-right_box">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name *"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone *"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email"

                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    {/* Service selection dropdown */}
                    {selectedServices.length !== 0 ? <>
                      &nbsp;<small style={{ color: 'gray' }}>[Note: You can select multiple services.]</small><br />
                    </> : <></>}
                    <select
                      className="form-control"
                      onChange={handleServiceSelect}
                      value="" // Keep the dropdown open for selection
                    >
                      <option value="" disabled>Select Services</option>
                      {allServiceData?.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>


                    {/* Selected services displayed as tags */}
                    {selectedServices.length !== 0 ? <>
                      &nbsp;<small style={{ color: 'gray' }}>Selected Services:</small>
                    </> : <></>}
                    <div className="selected-services">

                      {selectedServices.map((service, index) => (
                        <span key={index} className="service-tag">
                          {service}
                          <button
                            type="button"
                            onClick={() => removeService(service)}
                            className="remove-service-btn"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group date" id="datepicker">
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <ReCAPTCHA
                      sitekey={`${process.env.REACT_APP_FORM_CAPTCHA_KEY}`}  // Replace with your Google reCAPTCHA site key
                      onChange={handleCaptcha}
                    />
                  </div>

                  <div class="form_submit">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormComponent;
