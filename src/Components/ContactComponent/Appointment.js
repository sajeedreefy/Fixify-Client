import React, { useEffect, useState } from "react";
import ApiFacade from '../../api/facade'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Appointment = () => {
  const [allServiceData, setAllServiceData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    areaCode: '',
    service: '',
    date: '',
    time: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create customer
      const customerPayload = {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        city: formData.city
      };
      const customerResponse = await ApiFacade.createCustomer(customerPayload);

      // Create quotation
      const quotationPayload = {
        // Use the created customer ID/name
        customer: customerResponse.name,
        appointment_date: formData.date,
        appointment_time: formData.time,
        items: [{
          service: formData.service,

        }],
        additional_info: formData.additionalInfo
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
        additionalInfo: ''
      });

      // toast.success('Quotation created successfully!');
      

      alert('Quotation created successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error processing your request.');
    }
  };


  return (
    <section class="book_an_appoimnet_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="book_an_appoinment_title text-center">
              <h2>Book an appointment</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="contact_form_box">
              <div class="blog_detail_form">
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
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
                    <div class="col-lg-6">
                      <div class="form-group">
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

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
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
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="areaCode"
                          value={formData.areaCode}
                          onChange={handleInputChange}
                          placeholder="Area code"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <select
                          className="form-control"
                          id="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select service</option>
                          {allServiceData?.map((service, index) => (
                            <option key={index} value={service.name}>{service.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <div class="input-group date" id="datepicker">
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="Select date"
                            required
                          />
                          <span class="input-group-append">
                            <span class="input-group-text  d-block">
                              {/* <FaCalendar /> */}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="time"
                          className="form-control"
                          id="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          placeholder="Time"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      className="form-control"
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Write something if you wish"
                    ></textarea>
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
      </div>
    </section>
  );
};

export default Appointment;
