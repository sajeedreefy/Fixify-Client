import React from "react";
import "./ContactComponent.css";
import { FaCalendar } from 'react-icons/fa';
import location from "../../images/Contct_location.png"
import call from "../../images/Contct_call.png"
import time from "../../images/Contct_time.png"

const ContactCompoent = () => {
  return (
    <>
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
                        <img src={location} alt="Location"/>
                    </div>
                    <div class="conct_box_detail">
                        <h4>Our location</h4>
                        <address class="contct_address">
                            4516 School Street, Danbury, 
                            CT, Canada
                        </address>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="contct_us_box contct_box2">
                    <div class="conct_img">
                        <img src={call} alt="Call"/>
                    </div>
                    <div class="conct_box_detail">
                        <h4>Call and email</h4>
                        <div class="contct_box_number">
                            <a href="tel:+44 123 456 7890">+44 123 456 7890</a>, 
                            <a href="tel:+44 9870 123456"> +44 9870 123456</a>
                        </div>
                      
                        <div class="contct_email_1">
                            <a href="mailto:troohandyman@email.com">troohandyman@email.com</a>, 
                            <a href="mailto:info@troohandyman.com"> info@troohandyman.com</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="contct_us_box">
                    <div class="conct_img">
                        <img src={time} alt="Time"/>
                    </div>
                    <div class="conct_box_detail">
                        <h4>Opening time</h4>
                      <div class="contct_timing">
                        <p>Monay to Friday: 10:00 AM to 06:00 PM</p>
                        <p>Satuay and Sunday: 10:00AM to 03:00 PM</p>
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
            <div class="contact_form_box">
              <div class="blog_detail_form">
                <form>
                  <div class="form-group">
                    <input
                      type="name"
                      class="form-control"
                      id="name"
                      aria-describedby="nameHelp"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Your phone"
                    />
                  </div>
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Select service</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <div class="input-group date" id="datepicker">
                      <input
                        type="text"
                        class="form-control"
                        id="date"
                        placeholder="Select date"
                      />
                      <span class="input-group-append">
                        <span class="input-group-text  d-block">
                          <FaCalendar/>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
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
          <div class="col-lg-6">
            <h4>Find us on google map</h4>
            <div class="contct_form_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8850349918985!2d72.49642611542339!3d23.027993021903114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e046fa5%3A0xd837def63555f791!2sTRooInbound%20Private%20Limited!5e0!3m2!1sen!2sin!4v1674649284683!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{border:"0"}}
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
