import React, { useEffect, useState } from "react";
import ApiFacade from '../../api/facade'
import "./ContactComponent.css";
import location from "../../images/Contct_location.png"
import call from "../../images/Contct_call.png"
import time from "../../images/Contct_time.png"
import { ToastContainer, toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

// import 'react-toastify/dist/ReactToastify.css';

const ContactCompoent = () => {
  const [allServiceData, setAllServiceData] = useState(null);
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

    if (formData.email && !validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!captchaToken) {
      toast.warn("Please verify that you are not a robot!");
      return;
    }
    else if (selectedServices.length === 0) {

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
        toast.success('Contact submitted successfully!');
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
      <section class="contact_us_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="contct_title text-center">
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="contct_us_box">
                <div class="conct_img">
                  <img src={location} alt="Location" />
                </div>
                <div class="conct_box_detail">
                  <h4>Our location</h4>
                  <address class="contct_address">
                    {preferenceItems?.address}
                  </address>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contct_us_box contct_box2">
                <div class="conct_img">
                  <img src={call} alt="Call" />
                </div>
                <div class="conct_box_detail">
                  <h4>Call and email</h4>
                  <div class="contct_box_number">
                    {preferenceItems?.phone_numbers.map((num, i) => (
                      <a key={i} href={`tel:${num.phone}`}>{num.phone},</a>

                    ))}
                  </div>

                  <div class="contct_email_1">
                    {preferenceItems?.email_addresses.slice(0, 1).map((mail, i) => (
                      <a key={i} href={`mailto:${mail.email}`}>{mail.email},</a>
                    ))}
                  </div>

                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contct_us_box">
                <div class="conct_img">
                  <img src={time} alt="Time" />
                </div>
                <div class="conct_box_detail">
                  <h4>Opening time</h4>
                  <div class="contct_timing">
                    {preferenceItems?.opening_hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact_map_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h4>Send us a message</h4>
              <div class="contact_form_box" style={{ height: 'auto' }}>
                <div class="blog_detail_form">
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
                        <div className="mb-1">&nbsp;<small style={{ color: ' #555555' }}>[Note: You can select multiple services.]</small></div>
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
                        <div className="mt-2">
                        &nbsp;<small style={{ color: ' #555555 ' }} >Selected Services:</small>
                      </div>
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
                      <label htmlFor="date" className="d-block d-sm-none text-left mb-2" style={{ color: ' #555555 ' }}>Select Appointment Date</label>
                      <div class="input-group date" id="datepicker">
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          placeholder="Select date"
                        />
                        <span class="input-group-append">
                          <span class="input-group-text  d-block">
                            {/* <FaCalendar/> */}
                          </span>
                        </span>
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
            <div class="col-lg-6">
              <h4>Find us on google map</h4>
              <div class="contct_form_map">
                <iframe
                  src={preferenceItems?.map_address}
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  title="googleMap"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default ContactCompoent;
