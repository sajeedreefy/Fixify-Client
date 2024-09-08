import React from "react";
import review1 from "../../images/client_review_bg_1.png";
import review2 from "../../images/client_review_bg_2.png";
import review3 from "../../images/client_review_bg_3.png";
import review4 from "../../images/people_choose_bg_4.png";
import title from "../../images/title_img.png";
import reviewImg1 from "../../images/review_img_3.png";
import reviewImg2 from "../../images/review_img_4.png";
import reviewImg3 from "../../images/review_img_1.png";
import reviewImg4 from "../../images/review_img_2.png";
import quote from "../../images/quote.png";
import { FaStar } from "react-icons/fa";

const ReviewComponent2 = () => {
  return (
    <section class="troo_da_client_reviews_wrapper">
      <div class="review_bg_1 review_ani">
        <img src={review1} alt="client_review_bg_1" />
      </div>
      <div class="review_bg_2 review_ani">
        <img src={review2} alt="client_review_bg_2" />
      </div>
      <div class="review_bg_3 review_ani">
        <img src={review3} alt="client_review_bg_3" />
      </div>
      <div class="review_bg_4 review_ani">
        <img src={review4} alt="choose_people_vector_4" />
      </div>
      <div class="review_bg_5 review_ani">
        <img src={review3} alt="choose_people_vector_3" />
      </div>
      <div class="review_bg_6 review_ani">
        <img src={review4} alt="client_review_bg_4" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="our_team_title">
              <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>Clients Review</h4>
                </div>
              </div>
              <div class="troo_da_hero_we_r_done_title">
                <h2>See our trusted clients what say about us</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="row review_row">
          <div class="col-lg-6">
            <div class="client_review_box">
              <div class="client_review_img_outer">
                <div class="client_review_img">
                  <img src={reviewImg1} alt="review_img_3" />
                </div>
                <div class="review_quote">
                  <img src={quote} alt="quote" />
                </div>
              </div>
              <div class="reviw_second_box">
                <div class="review_outer d-flex justify-content-between">
                  <div class="client_review_detail_outer">
                    <div class="clinet_review_name">
                      <p>Denial Cooper</p>
                    </div>
                    <div class="clinet_review_days">
                      <p>2 day ago</p>
                    </div>
                  </div>
                  <div class="clinet_review_star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div class="review_content">
                  <p>
                    Lorem ipsum dolor amet consectetur do & eiusmod tempor
                    incididunt & labore they enim minim veniam Lorem ipsum dolor
                    amet consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="client_review_box client_box_4">
              <div class="client_review_img_outer">
                <div class="client_review_img">
                  <img src={reviewImg2} alt="review_img_4" />
                </div>
                <div class="review_quote">
                  <img src={quote} alt="quote" />
                </div>
              </div>
              <div class="reviw_second_box">
                <div class="review_outer d-flex justify-content-between">
                  <div class="client_review_detail_outer">
                    <div class="clinet_review_name">
                      <p>Alisha Brown</p>
                    </div>
                    <div class="clinet_review_days">
                      <p>2 day ago</p>
                    </div>
                  </div>
                  <div class="clinet_review_star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div class="review_content">
                  <p>
                    Lorem ipsum dolor amet consectetur do & eiusmod tempor
                    incididunt & labore they enim minim veniam Lorem ipsum dolor
                    amet consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="client_review_box">
              <div class="client_review_img_outer">
                <div class="client_review_img">
                  <img src={reviewImg3} alt="review_img_1" />
                </div>
                <div class="review_quote">
                  <img src={quote} alt="quote" />
                </div>
              </div>
              <div class="reviw_second_box">
                <div class="review_outer d-flex justify-content-between">
                  <div class="client_review_detail_outer">
                    <div class="clinet_review_name">
                      <p>Josefine jerica</p>
                    </div>
                    <div class="clinet_review_days">
                      <p>2 day ago</p>
                    </div>
                  </div>
                  <div class="clinet_review_star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div class="review_content">
                  <p>
                    Lorem ipsum dolor amet consectetur do & eiusmod tempor
                    incididunt & labore they enim minim veniam Lorem ipsum dolor
                    amet consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="client_review_box client_box_2">
              <div class="client_review_img_outer">
                <div class="client_review_img">
                  <img src={reviewImg4} alt="review_img_2" />
                </div>
                <div class="review_quote">
                  <img src={quote} alt="quote" />
                </div>
              </div>
              <div class="reviw_second_box">
                <div class="review_outer d-flex justify-content-between">
                  <div class="client_review_detail_outer">
                    <div class="clinet_review_name">
                      <p>Kevin Nash</p>
                    </div>
                    <div class="clinet_review_days">
                      <p>2 day ago</p>
                    </div>
                  </div>
                  <div class="clinet_review_star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div class="review_content">
                  <p>
                    Lorem ipsum dolor amet consectetur do & eiusmod tempor
                    incididunt & labore they enim minim veniam Lorem ipsum dolor
                    amet consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row review_row">
          <div class="col-lg-6">
            <div class="client_review_box">
              <div class="client_review_img_outer">
                <div class="client_review_img">
                  <img src={reviewImg1} alt="review_img_3" />
                </div>
                <div class="review_quote">
                  <img src={quote} alt="quote" />
                </div>
              </div>
              <div class="reviw_second_box">
                <div class="review_outer d-flex justify-content-between">
                  <div class="client_review_detail_outer">
                    <div class="clinet_review_name">
                      <p>Denial Cooper</p>
                    </div>
                    <div class="clinet_review_days">
                      <p>2 day ago</p>
                    </div>
                  </div>
                  <div class="clinet_review_star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div class="review_content">
                  <p>
                    Lorem ipsum dolor amet consectetur do & eiusmod tempor
                    incididunt & labore they enim minim veniam Lorem ipsum dolor
                    amet consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="client_review_box client_box_4">
              <div class="client_review_img_outer">
                <div class="client_review_img">
                  <img src={reviewImg2} alt="review_img_4" />
                </div>
                <div class="review_quote">
                  <img src={quote} alt="quote" />
                </div>
              </div>
              <div class="reviw_second_box">
                <div class="review_outer d-flex justify-content-between">
                  <div class="client_review_detail_outer">
                    <div class="clinet_review_name">
                      <p>Alisha Brown</p>
                    </div>
                    <div class="clinet_review_days">
                      <p>2 day ago</p>
                    </div>
                  </div>
                  <div class="clinet_review_star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div class="review_content">
                  <p>
                    Lorem ipsum dolor amet consectetur do & eiusmod tempor
                    incididunt & labore they enim minim veniam Lorem ipsum dolor
                    amet consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent2;
