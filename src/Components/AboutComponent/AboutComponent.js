import React from "react";
import "./AboutComponent.css";
import polugon1 from "../../images/about_polygon_1.png"
import polugon2 from "../../images/about_polygon_2.png"
import polugon3 from "../../images/about_polygon_3.png"
import polugon4 from "../../images/about_polygon_4.png"
import title from "../../images/title_img.png"
import exp from "../../images/year_icon.png"
import aboutImg from "../../images/year_of_experience.png"
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section class="troo_da_handyman_wrapper">
      <div class="about_polygon-1 action">
        <img src={polugon1} alt="about_polygon-1" />
      </div>
      <div class="about_polygon-2 action">
        <img src={polugon2} alt="about_polygon-2" />
      </div>
      <div class="about_polygon-3 action">
        <img src={polugon3} alt="about_polygon-3" />
      </div>
      <div class="about_polygon-4 action">
        <img src={polugon4} alt="about_polygon-4" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="troo_da_about_handyman_left_side">
              <div class="troo_da_hero_small_outer about d-flex">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>Quality handyman services</h4>
                </div>
              </div>
              <div class="troo_da_about_hero_handyman_title">
                <h2>We provide cost effective solutions for you.</h2>
              </div>
              <div class="troo_da_about_hero_handyman_title_cont">
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div class="troo_da_about_hero_handyman_cont">
                <p>
                  Lorem Ipsum is simply dummy and is text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's and
                  standard dummy text ever since the 1500s, when an unknown
                  printer took and galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries.
                </p>
              </div>
              <div class="troo_da_about_hero_handyman_btn">
                <Link to="/Home/About_Us">
                <button type="button" class="btn btn-primary">
                  Learn more about us
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="troo_da_handyman_img">
              <img
                src={aboutImg}
                alt="year_of_experience"
              />
            </div>

            <div class="about_year_box_outer">
              <div class="about_year_box d-flex">
                <div class="about_yr_icon">
                  {/* <img src={exp} alt="year_icon" /> */}
                  <p>20+</p>
                </div>
                <div class="about_yr_detail">
                  <h4>Year of</h4>
                  <h2>Experience</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
