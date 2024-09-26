import React, { useEffect, useState } from "react";
import "./ServiceListComponent.css";
import title from "../../images/title_img.png";
import serviceArrow from "../../images/service_box_Arrow.svg";
import Arrowyellow from "../../images/service_box_yellow_icon.png";
import { Link } from "react-router-dom";
import ApiFacade from '../../api/facade';
import { ShimmerPostItem } from 'react-shimmer-effects';

const ServiceListComponent = () => {


  const [allServiceData, setAllServiceData] = useState(null);

  const [serviceLoading, setServiceLoading] = useState(true);


  useEffect(() => {
    const loadAllServiceData = async () => {
      try {
        const data = await ApiFacade.fetchAllServices();
        setAllServiceData(data);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setServiceLoading(false);
      }
    };

    loadAllServiceData();
  }, []);


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
                <h2>We provide one of the best of Fixify services</h2>
              </div>
            </div>
          </div>
        </div>
        {serviceLoading ? (
          <>
            <ShimmerPostItem card cta />
            <ShimmerPostItem card cta />
            <ShimmerPostItem card cta />
          </>
        ) : (
          <div class="row">

            {allServiceData.map((e, i) => (
              <div class="col-lg-6" key={i}>
                <Link
                   to={`/Home/Our_Services/Service_Details?id=${e.name}`}
                >
                  <div class="servive_box d-flex align-items-center">
                    <div class="service_box_img_outer">
                      <img src={`${process.env.REACT_APP_BASE_URL}/${e.image}`} alt="service_img-1" />
                    </div>
                    <div class="service_box_detail">
                      <div class="service_box_title">
                        <h4>{e.name} </h4>
                      </div>
                      <div class="service_box_content">
                        <p>{e.custom_intro}</p>

                      </div>
                      <div class="service_box_readmore d-flex">
                        <span>See Details </span>
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
        )}
      </div>
    </section>
  );
};

export default ServiceListComponent;
