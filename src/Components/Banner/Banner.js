import {React, useState, useEffect,useRef} from "react";
import title from "../../images/title_img.png";
import heroImg from "../../images/hero_img.png";
import "./Banner.css";
import { Link } from "react-router-dom";
import { fetchBannerItems } from "../../api/banner/bannerAPI";

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const bannerRef = useRef(null);


  useEffect(() => {
    const loadBannerItems = async () => {
      try {
        const data = await fetchBannerItems();
        setBannerData(data);
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadBannerItems();
  }, []);

  useEffect(() => {
    if (bannerData && bannerRef.current) {
      // Set the background image using JavaScript
      bannerRef.current.style.backgroundImage = `url(${process.env.REACT_APP_BASE_URL}${bannerData.background_image})`;
    }
  }, [bannerData]);

  if (!bannerData) {
    return <div>Loading...</div>; // Optional: Add a loading state
  }

  return (
    <section class="troo_da_hero_wrapper" ref={bannerRef}>
      <div class="hero_overLay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="troo_da_hero_left_side">
              <div class="troo_da_hero_small_outer d-flex">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>{bannerData.header}</h4>
                </div>
              </div>
              <div className="troo_da_hero_title">
                <h1>
                  {(() => {
                    const words = bannerData?.title.split(" "); // Split title into words
                    const firstPart = words.slice(0, 5).join(" "); // First 5 words
                    const secondPart = words.slice(5).join(" "); // Remaining words

                    return (
                      <>
                        {firstPart} <span>{secondPart}</span>
                      </>
                    );
                  })()}
                </h1>
              </div>
              <div class="troo_da_hero_content">
                <p>{bannerData.subtitle}</p>
              </div>
              <div class="troo_da_hero_btn">
                <Link to={bannerData.link}>
                  <button type="button" class="btn btn-primary">
                    See Our Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 hero_right">
            <div class="troo_da_hero_img">
              <img
                src={`${process.env.REACT_APP_BASE_URL}${bannerData.hero_image}`}
                alt="hero_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
