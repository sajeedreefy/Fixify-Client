import React, { useEffect, useState } from "react";
import "./ServiceComponent.css";
import serviceBg from "../../images/what_we_r_done_bg_1.png";
import serviceBg2 from "../../images/what_we_r_done_bg_2.png";
import title from "../../images/title_img.png";
import { Link } from "react-router-dom";
// import { fetchAllServiceData } from '../../api/services/allServicesAPI';
import ApiFacade from '../../api/facade';

const ServiceComponent = () => {

  const [allServiceData, setAllServiceData] = useState(null);

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



  return (
    <section class="troo_da_hand_we_r_done_wrapper">
      <div class="what_we_r_done_bg_1">
        <img src={serviceBg} alt="what_we_r_done_bg_1" />
      </div>
      <div class="what_we_r_done_bg_2">
        <img src={serviceBg2} alt="what_we_r_done_bg_2" />
      </div>
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
        <div class="row">
          {allServiceData?.slice(0, 6).map((e, i) => (
            <div class="col-lg-4" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?id=${e.name}`}
              >
                <div class="troo_da_hand_we_r_done_box">
                  <div class="troo_da_hand_we_r_done_box_inner">
                    <div class="troo_da_hand_we_r_done_box_img">
                      <img src={`${process.env.REACT_APP_BASE_URL}/${e.image}`} alt="service_img-1" />
                    </div>
                    <div class="troo_da_hand_we_r_done_box_hover_detail">
                      <h3>{e.name} </h3>
                      <p>{e.custom_intro}</p>
                      <div class="readmore">
                        <p>See Details</p>
                      </div>
                    </div>
                    <div class="troo_da_hand_we_r_done_box_title">
                      <h3>{e.name} </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="troo_da_about_we_r_done_btn text-center">
          <Link to="/Home/Our_Services">
          <button type="button" class="btn btn-primary">
            See All Services
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
