import React from "react";
import "./FormComponent.css";
import title from "../../images/title_img.png"
import mail from "../../images/form_mail_box.png"
import { Link } from "react-router-dom";

const FormComponent = () => {
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
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div class="form_content">
                <p>
                  Lorem Ipsum is simply dummy and is text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's and
                  standard dummy text ever since the 1500s, when an unknown
                  printer took and galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries.
                </p>
              </div>
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
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                    <br />
                    <a href="mailto:troohandyman@email.com">
                      troohandyman@email.com
                    </a>
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
                    type="number"
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
                      type="date"
                      class="form-control"
                      id="date"
                      data-placeholder="Select date"
                      required
                      aria-required="true"
                    />
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
      </div>
    </section>
  );
};

export default FormComponent;
