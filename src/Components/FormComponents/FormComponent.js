import React, { useEffect, useState } from "react";
import ApiFacade from '../../api/facade'
import "./FormComponent.css";
import title from "../../images/title_img.png"
import mail from "../../images/form_mail_box.png"
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const FormComponent = () => {

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
        customer: customerResponse.name, // Use the created customer ID/name
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

      console.log(quotationResponse);
      // toast.success('Appointment created successfully!');
      
      alert('Quotation created successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error processing your request.');
    }
  };

  return (
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
              <div class="form_title">
                <h2>Book online for appointment and get free quote</h2>
            
                {/* <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4> */}
              </div>
              {/* <div class="form_content">
                <p>
                  Ready to start your home improvement project? Book a free consultation with one of our experts to discuss your needs and get a personalized quote. Whether it’s a small repair or a major renovation, we’re here to provide transparent pricing and exceptional service. Simply fill out the form, and we’ll get back to you to confirm your appointment.
                </p>
              </div> */}
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
                    {preferenceItems?.phone_numbers.slice(0,1).map((num,i)=>(
                      <a key={i} href={`tel:${num.phone}`}>{num.phone}</a>
                      
                    ))}
                    
                    
                    <br />


                    {preferenceItems?.email_addresses.slice(0,1).map((mail,i)=>(
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
                    placeholder="Enter your name"
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
                    placeholder="Your phone"
                    required
                  />
                </div>
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
    </section>
  );
};

export default FormComponent;
