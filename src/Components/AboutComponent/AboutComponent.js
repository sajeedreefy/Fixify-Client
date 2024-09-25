import React, { useState, useEffect } from "react";
import "./AboutComponent.css";
import polugon1 from "../../images/about_polygon_1.png";
import polugon2 from "../../images/about_polygon_2.png";
import polugon3 from "../../images/about_polygon_3.png";
import polugon4 from "../../images/about_polygon_4.png";
import title from "../../images/title_img.png";
import { Link } from "react-router-dom";
import { ShimmerPostList } from 'react-shimmer-effects';
import ApiFacade from "../../api/facade";


const AboutComponent = () => {
  const [aboutComponentData, setAboutComponent] = useState(null);
  const [aboutLoading, setAboutLoading] = useState(true);


  useEffect(() => {
    const loadAboutComponentItems = async () => {
      try {
        const data = await ApiFacade.fetchAboutComponent();
        setAboutComponent(data);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setAboutLoading(false);
      }
    };

    loadAboutComponentItems();
  }, []);


  return (


    <>
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
          {aboutLoading ? (
            <ShimmerPostList
              postStyle="STYLE_FOUR"
              col={2}
              row={1}
              gap={20}
            />

          ) : (<>
            <div class="row">
              <div class="col-lg-6">
                <div class="troo_da_about_handyman_left_side">
                  <div class="troo_da_hero_small_outer about d-flex">
                    <div class="troo_da_small_title_img zoom-in-zoom-out">
                      <img src={title} alt="title_img" />
                    </div>
                    <div class="troo_da_hero_left_small_title">
                      <h4>{aboutComponentData?.header}</h4>
                    </div>
                  </div>
                  <div class="troo_da_about_hero_handyman_title">
                    <h2>{aboutComponentData?.title}</h2>
                  </div>
                  <div class="troo_da_about_hero_handyman_title_cont">
                    <h4>{aboutComponentData?.subtitle}</h4>
                  </div>
                  <div class="troo_da_about_hero_handyman_cont">
                    <p>
                      {aboutComponentData?.description}
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
                  <img src={`${process.env.REACT_APP_BASE_URL}${aboutComponentData?.image}`} alt="year_of_experience" />
                </div>

                <div class="about_year_box_outer">
                  <div class="about_year_box d-flex">
                    <div class="about_yr_icon">
                      {/* <img src={exp} alt="year_icon" /> */}
                      <p>{aboutComponentData?.experience}+</p>
                    </div>
                    <div class="about_yr_detail">
                      <h4>{aboutComponentData?.experience > 1 ? 'Years of' : 'Year of'}</h4>
                      <h2>Experience</h2>
                    </div>
                  </div>
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

export default AboutComponent;
