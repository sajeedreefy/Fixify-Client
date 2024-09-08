import React from "react";
import "./ServiceListComponent.css";
import title from "../../images/title_img.png";
import serviceArrow from "../../images/service_box_Arrow.svg";
import Arrowyellow from "../../images/service_box_yellow_icon.png";
import { ServiceData } from "./ServiceData";
import { Link, createSearchParams } from "react-router-dom";

const ServiceListComponent = () => {
  return (
    <section class="service_box_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="troo_da_hand_we_r_done_title_outer m-auto text-center">
              <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>What we are done</h4>
                </div>
              </div>
              <div class="troo_da_hero_we_r_done_title">
                <h2>We provide one of the best of handyman services</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          {ServiceData.slice(0, 2).map((e, i) => (
            <div class="col-lg-6" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="servive_box d-flex align-items-center">
                  <div class="service_box_img_outer">
                    <img src={e.img} alt="service_img-1" />
                  </div>
                  <div class="service_box_detail">
                    <div class="service_box_title">
                      <h4>{e.name} </h4>
                    </div>
                    <div class="service_box_content">
                      <p>{e.para}</p>
                    </div>
                    <div class="service_box_readmore d-flex">
                      <span>{e.btn} </span>
                      <div class="servive_box_img_arrow">
                        <div class="servive_box_blue_icon">
                          <img src={serviceArrow} alt="service_box_Arrow" />
                        </div>

                        <div class="service_box_yellow_icon">
                          <img
                            src={Arrowyellow}
                            alt="service_box_yellow_icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          {ServiceData.slice(2, 4).map((e, i) => (
            <div class="col-lg-6" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="servive_box d-flex align-items-center">
                  <div class="service_box_img_outer">
                    <img src={e.img} alt="service_img-1" />
                  </div>
                  <div class="service_box_detail">
                    <div class="service_box_title">
                      <h4>{e.name} </h4>
                    </div>
                    <div class="service_box_content">
                      <p>{e.para}</p>
                    </div>
                    <div class="service_box_readmore d-flex">
                      <span>{e.btn} </span>
                      <div class="servive_box_img_arrow">
                        <div class="servive_box_blue_icon">
                          <img src={serviceArrow} alt="service_box_Arrow" />
                        </div>

                        <div class="service_box_yellow_icon">
                          <img
                            src={Arrowyellow}
                            alt="service_box_yellow_icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          {ServiceData.slice(4, 6).map((e, i) => (
            <div class="col-lg-6" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="servive_box d-flex align-items-center">
                  <div class="service_box_img_outer">
                    <img src={e.img} alt="service_img-1" />
                  </div>
                  <div class="service_box_detail">
                    <div class="service_box_title">
                      <h4>{e.name} </h4>
                    </div>
                    <div class="service_box_content">
                      <p>{e.para}</p>
                    </div>
                    <div class="service_box_readmore d-flex">
                      <span>{e.btn} </span>
                      <div class="servive_box_img_arrow">
                        <div class="servive_box_blue_icon">
                          <img src={serviceArrow} alt="service_box_Arrow" />
                        </div>

                        <div class="service_box_yellow_icon">
                          <img
                            src={Arrowyellow}
                            alt="service_box_yellow_icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListComponent;
