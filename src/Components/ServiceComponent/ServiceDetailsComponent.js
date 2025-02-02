import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "./ServiceDetails.css";
import title from "../../images/title_img.png";
import play from "../../images/play_btn.png";
import OtherServices from './OtherServicesComponent';
import NeedHelp from './NeedHelpComponent';
import ApiFacade from '../../api/facade';
import { ShimmerPostItem, ShimmerThumbnail } from 'react-shimmer-effects';

const ServiceDetailsComponent = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get('id');


  const [singleServiceData, setSingleServiceData] = useState();
  const [serviceLoading, setServiceLoading] = useState(true);


  useEffect(() => {
    // Use the serviceId to fetch details from API
    const fetchServiceDetails = async () => {
      try {
        const data = await ApiFacade.fetchSingleService(serviceId);
        setSingleServiceData(data);
      } catch (error) {
        console.error('Error fetching service details:', error);
      }finally {
        setServiceLoading(false);
      }
    };

    fetchServiceDetails();
  }, [serviceId]);

  const half = Math.ceil(singleServiceData?.custom_feature_list.length / 2);
  const firstHalf = singleServiceData?.custom_feature_list.slice(0, half);
  const secondHalf = singleServiceData?.custom_feature_list.slice(half);

  return (
    <>
      <section class="service_detail_wrapper">
        <div class="container">
          {serviceLoading ? (
            <>
              <ShimmerThumbnail height={200} width={400} rounded />
              <ShimmerPostItem card cta />
              <ShimmerPostItem card cta />
            </>
          ) : (
            <>
              <div class="row">
                <div class="col-lg-4">
                  <div class="servive_detail_wrapper_Box_tilte">
                    <div class="priciing_title_outer">
                      <div class="troo_da_hero_small_outer about d-flex">
                        <div class="troo_da_small_title_img zoom-in-zoom-out">
                          <img src={title} alt="title_img" />
                        </div>
                        <div class="troo_da_hero_left_small_title">
                          <h4>{singleServiceData?.name} overview</h4>
                        </div>
                      </div>
                      {/* <div class="troo_da_about_hero_handyman_title">
                  <h2>{singleServiceData?.name}</h2>
                </div> */}
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="servive_detail_wrapper_Box_content">
                    <p>
                      {singleServiceData?.custom_intro}
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="service_box_wrapper_img_outer">
                    <div class="service_box_wrapper_img" style={{"width": "100%"}}>
                      <img src={`${process.env.REACT_APP_BASE_URL}/${singleServiceData?.custom_banner_image}`} alt="service_detail_img" />
                    </div>
                    <div class="play_btn">
                      <a
                        class="popup-youtube"
                        href={singleServiceData?.custom_video_link}
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
                    <p dangerouslySetInnerHTML={{ __html: singleServiceData?.description }}></p>

                    <div class="troo_da_people_choose_list our_feature">
                      <h4>Our features</h4>
                      <div class="troo_da_people_choose_list_ul d-flex justify-content-between">
                        {/* First half of features */}
                        <div className="troo_da_people_chooseList_box">
                          {firstHalf?.map((feature, index) => (
                            <p key={index}>{feature.feature}</p>
                          ))}
                        </div>

                        {/* Second half of features */}
                        <div className="troo_da_people_chooseList_box_2">
                          {secondHalf?.map((feature, index) => (
                            <p key={index}>{feature.feature}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p>
                      {singleServiceData?.custom_conclusion}
                    </p>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="latest_tech_box">
                          <h4>Using Latest Technology</h4>
                          <div class="latest_box_list">
                            <ul class="latest_box_list_ul">
                              {singleServiceData?.custom_technology_list.map((f, i) =>
                                <li key={i}>{f.technology_name}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <div class="latest_tech_box_img">
                          <img src={`${process.env.REACT_APP_BASE_URL}/${singleServiceData?.image}`} alt="service_box_detail_img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="service_box_wrapper_right_side">
                    <OtherServices />
                    <NeedHelp serviceId={serviceId}/>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsComponent;
