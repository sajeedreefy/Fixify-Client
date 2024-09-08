import React from "react";
import { FaCalendar } from 'react-icons/fa';

const Appointment = () => {
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
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="name"
                          class="form-control"
                          id="name"
                          aria-describedby="nameHelp"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="City"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Area code"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Select service</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
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
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control text-2"
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
        </div>
      </div>
    </section>
  );
};

export default Appointment;
