import React, { useState, useEffect } from "react";
import "./ReviewComponent.css";
import { FaStar } from "react-icons/fa";
import reviewBG1 from "../../images/client_review_bg_1.png";
import reviewBG2 from "../../images/client_review_bg_2.png";
import reviewBG3 from "../../images/client_review_bg_3.png";
import reviewBG4 from "../../images/client_review_bg_4.png";
import title from "../../images/title_img.png";
import quote from "../../images/quote.png";
import ApiFacade from "../../api/facade";

const ReviewComponent2 = () => {
  const [customerReviewData, setCustomerReviewData] = useState(null);

  useEffect(() => {
    const loadCustomerReviewData = async () => {
      try {
        const data = await ApiFacade.fetchCustomerReviews();
        setCustomerReviewData(data); // Load all reviews
      } catch (error) {
        console.error("Error loading reviews:", error);
      }
    };

    loadCustomerReviewData();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} />
      );
    }
    return stars;
  };

  return (
    <section className="troo_da_client_reviews_wrapper">
      <div className="review_bg_1 review_ani">
        <img src={reviewBG1} alt="client_review_bg_1" />
      </div>
      <div className="review_bg_2 review_ani">
        <img src={reviewBG2} alt="client_review_bg_2" />
      </div>
      <div className="review_bg_3 review_ani">
        <img src={reviewBG3} alt="client_review_bg_3" />
      </div>
      <div className="review_bg_4 review_ani">
        <img src={reviewBG4} alt="choose_people_vector_4" />
      </div>
      <div className="review_bg_5 review_ani">
        <img src={reviewBG3} alt="choose_people_vector_3" />
      </div>
      <div className="review_bg_6 review_ani">
        <img src={reviewBG4} alt="client_review_bg_4" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our_team_title">
              <div className="troo_da_hero_small_outer about d-flex justify-content-center">
                <div className="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div className="troo_da_hero_left_small_title">
                  <h4>Clients Review</h4>
                </div>
              </div>
              <div className="troo_da_hero_we_r_done_title">
                <h2>See our trusted clients what they say about us</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Render reviews in groups of 4 */}
        {customerReviewData &&
          customerReviewData.map((review, index) => {
            if (index % 4 === 0) {
              return (
                <div className="row" key={index}>
                  {customerReviewData.slice(index, index + 4).map((reviewItem, subIndex) => (
                    <div className="col-lg-6" key={subIndex}>
                      <div
                        className={`client_review_box ${
                          subIndex === 1 || subIndex === 3 ? "client_box_2" : ""
                        }`}
                      >
                        <div className="client_review_img_outer">
                          <div className="client_review_img">
                            <img
                              src={`https://admin-fixify.glascutr.com${reviewItem.customer_image}`}
                              alt={`review_img_${index + subIndex + 1}`}
                            />
                          </div>
                          <div className="review_quote">
                            <img src={quote} alt="quote" />
                          </div>
                        </div>
                        <div className="reviw_second_box">
                          <div className="review_outer d-flex justify-content-between">
                            <div className="client_review_detail_outer">
                              <div className="clinet_review_name">
                                <p>{reviewItem.customer}</p>
                              </div>
                              <div className="clinet_review_days">
                                <p>{new Date(reviewItem.creation).toDateString()}</p>
                              </div>
                            </div>
                            <div className="clinet_review_star">
                              {renderStars(parseInt(reviewItem.rating))}
                            </div>
                          </div>
                          <div className="review_content">
                            <p>{reviewItem.comment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
        {/* <div className="troo_da_about_we_r_done_btn text-center">
          <Link to="/Home/Testimonial">
            <button type="button" className="btn btn-primary">
              See More Review
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ReviewComponent2;
