import React, { useEffect, useState } from "react";
import ApiFacade from '../../api/facade';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const Appointment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get('s_id');

  const [captchaToken, setCaptchaToken] = useState(null);

  // This function will trigger when captcha is successfully solved
  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const [allServiceData, setAllServiceData] = useState([]);
  const [selectedServices, setSelectedServices] = useState(serviceId ? [serviceId] : []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    additionalInfo: ''
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create customer
      const customerPayload = {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        address: formData.address
      };
      const customerResponse = await ApiFacade.createCustomer(customerPayload);

      // Create quotation with multiple services
      const quotationPayload = {
        customer: customerResponse.name,
        appointment_date: formData.date,
        items: selectedServices.map(service => ({
          service: service,
        })),
        additional_info: formData.additionalInfo
      };

      const quotationResponse = await ApiFacade.createQuotation(quotationPayload);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        additionalInfo: ''
      });
      setSelectedServices([]);

      if (quotationResponse) {
        toast.success('Quotation created successfully!');
      } else {
        toast.error('There is something wrong!');
      }

    } catch (error) {
      toast.error('There is something wrong!');
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <section className="book_an_appoimnet_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="book_an_appoinment_title text-center">
                <h2>Book an appointment</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="contact_form_box">
                <div className="blog_detail_form">
                  <form onSubmit={handleSubmit}>
                    {/* Input fields */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Your phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
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
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-lg-6">
                        <div className="form-group">
                          {/* Service selection dropdown */}
                          <select
                            className="form-control"
                            onChange={handleServiceSelect}
                            value="" // Keep the dropdown open for selection
                          >
                            <option value="" disabled>Select service</option>
                            {allServiceData.map((service, index) => (
                              <option key={index} value={service.name}>
                                {service.name}
                              </option>
                            ))}
                          </select>

                          {/* Selected services displayed as tags */}
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
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="Select date"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="row">
                      <div className="col-lg-6">

                        <div className="form-group">
                          <ReCAPTCHA
                            sitekey={`${process.env.REACT_APP_FORM_CAPTCHA_KEY}`}  // Replace with your Google reCAPTCHA site key
                            onChange={handleCaptcha}
                          />
                        </div>

                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            placeholder="Write something if you wish"
                          ></textarea>
                        </div>
                      </div>

                    </div>

                    <div className="form_submit">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
