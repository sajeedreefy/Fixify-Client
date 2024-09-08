import React from "react";
import "./ServiceDetails.css";
import title from "../../images/title_img.png";
import serviceDetails from "../../images/service_detail_img.png";
import servicebox from "../../images/service_box_detail_img.png";
import play from "../../images/play_btn.png";

const ServiceDetailsComponent = () => {
  return (
    <section class="service_detail_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="servive_detail_wrapper_Box_tilte">
              <div class="priciing_title_outer">
                <div class="troo_da_hero_small_outer about d-flex">
                  <div class="troo_da_small_title_img zoom-in-zoom-out">
                    <img src={title} alt="title_img" />
                  </div>
                  <div class="troo_da_hero_left_small_title">
                    <h4>Plumbing services overview</h4>
                  </div>
                </div>
                <div class="troo_da_about_hero_handyman_title">
                  <h2>Plumbing Service</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="servive_detail_wrapper_Box_content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in vestibulum arcu. Sed ultricies lectus non vulputate
                scelerisque. Morbi eu nisl quis massa efficitur semper nec in
                massa. Nulla id tempor lacus.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="service_box_wrapper_img_outer">
              <div class="service_box_wrapper_img">
                <img src={serviceDetails} alt="service_detail_img" />
              </div>
              <div class="play_btn">
                <a
                  class="popup-youtube"
                  href="https://www.youtube.com/watch?v=bY-mOdgz7zQ"
                  target="blank"
                >
                  <img src={play} alt="play_btn" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <div class="service_box_wrapper_left_side">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dolor eu dui elementum hendrerit in sed metus. Sed
                consectetur nunc luctus quam faucibus rhoncus.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dolor eu dui elementum hendrerit in sed metus. Sed
                consectetur nunc luctus quam faucibus rhoncus. Quisque sit amet
                dolor lobortis, dignissim magna ut, tincidunt nulla. Sed nec
                nibh nec augue egestas porttitor. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
                varius augue eleifend arcu scelerisque, id dignissim eros
                mattis. Morbi congue vestibulum erat sit amet gravida.
              </p>
              <div class="troo_da_people_choose_list our_feature">
                <h4>Our features</h4>
                <div class="troo_da_people_choose_list_ul d-flex justify-content-between">
                  <div class="troo_da_people_chooseList_box">
                    <p>An affordable pricing plan</p>
                    <p>All type repairs and maintence</p>
                    <p>Commercial &amp; Industrial Services</p>
                  </div>
                  <div class="troo_da_people_chooseList_box_2">
                    <p>We have morden technology to do work</p>
                    <p>Work finish before deadline</p>
                    <p>We provide 24X7 emergency services</p>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dolor eu dui elementum hendrerit in sed metus. Sed
                consectetur nunc luctus quam faucibus rhoncus. Quisque sit amet
                dolor lobortis, dignissim magna ut.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dolor eu dui elementum hendrerit in sed metus. Sed
                consectetur nunc luctus quam faucibus rhoncus. Quisque sit amet
                dolor lobortis, dignissim magna ut, tincidunt nulla. Sed nec
                nibh nec augue egestas porttitor. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
                varius augue eleifend arcu scelerisque, id dignissim eros
                mattis. Morbi congue vestibulum erat sit amet gravida.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <div class="latest_tech_box">
                    <h4>Using Latest Technology</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur with adipiscing
                      elit.Ut elit tellus, luctus nec atten.
                    </p>
                    <div class="latest_box_list">
                      <ul class="latest_box_list_ul">
                        <li>We have morden technology to do work</li>
                        <li>Work finish before deadline</li>
                        <li>We provide 24X7 emergency services</li>
                        <li>All type repairs and maintence</li>
                        <li>Commercial & Industrial Services</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="latest_tech_box_img">
                    <img src={servicebox} alt="service_box_detail_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="service_box_wrapper_right_side">
              <div class="other_box">
                <div class="other_list">
                  <div class="footer_title">
                    <h4>Other Services</h4>
                  </div>
                  <ul class="other_list_ul">
                    <li>Painting Services</li>
                    <li>Plumbing Services</li>
                    <li>Painting Services</li>
                    <li>Home Renovation Services</li>
                    <li>Electrical Services</li>
                    <li>Caroenter Services</li>
                  </ul>
                </div>
              </div>
              <div class="need_any_help_box">
                <div class="footer_title">
                  <h4>Need Any Help?</h4>
                </div>
                <div class="footer_call_detail">
                  <p>Call us</p>
                </div>
                <div class="footer_call">
                  <a href="tel:+44 123 456 7065">+44 123 456 7065</a>
                </div>
                <div class="footer_mail_detail">
                  <p>Email us</p>
                </div>
                <div class="footer_call">
                  <a href="mailto:troohanyman@email.com">
                    troohanyman@email.com
                  </a>
                </div>
                <div class="need_any_help_conct_btn">
                  <button type="button" class="btn btn-primary">
                    Contact with Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsComponent;
