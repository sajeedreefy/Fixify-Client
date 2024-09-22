import React, { useState, useEffect } from "react";
import "./ReviewComponent.css";
import { FaStar } from "react-icons/fa";
import reviewBG1 from "../../images/client_review_bg_1.png";
import reviewBG2 from "../../images/client_review_bg_2.png";
import reviewBG3 from "../../images/client_review_bg_3.png";
import reviewBG4 from "../../images/client_review_bg_4.png";
import title from "../../images/title_img.png";
import quote from "../../images/quote.png";
import ApiFacade from '../../api/facade';
import { ShimmerPostItem } from 'react-shimmer-effects';

const ReviewComponent2 = () => {
  const [customerReviewData, setCustomerReviewData] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);

  useEffect(() => {
      const loadCustomerReviewData = async () => {
          try {
              const data = await ApiFacade.fetchCustomerReviews();
              setCustomerReviewData(data);
          } catch (error) {
              console.error('Error loading reviews:', error);
          } finally {
              setReviewLoading(false);
          }
      };

      loadCustomerReviewData();
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
          stars.push(
              <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />
          );
      }
      return stars;
  };

  // Function to chunk reviews into rows of 2 items
  const chunkReviews = (reviews, chunkSize) => {
      const chunks = [];
      for (let i = 0; i < reviews.length; i += chunkSize) {
          chunks.push(reviews.slice(i, i + chunkSize));
      }
      return chunks;
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
              {reviewLoading ? (
                  <>
                      <ShimmerPostItem card cta />
                      <ShimmerPostItem card cta />
                  </>
              ) : (
                  <>
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
                                      <h2>See our trusted clients
                                          what say about us</h2>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {chunkReviews(customerReviewData, 2).map((reviewChunk, rowIndex) => (
                          <div className="row review_row" key={rowIndex}>
                              {reviewChunk.map((review, index) => (
                                  <div className="col-lg-6" key={index}>
                                      <div className={`client_review_box ${index === 1 ? 'client_box_2' : ''}`}>
                                          <div className="client_review_img_outer">
                                              <div className="client_review_img">
                                                  <img src={`${process.env.REACT_APP_BASE_URL}${review.customer_image}`} alt={`review_img_${index + 1}`} className="rounded-circle" style={{height: '60px', width: '60px'}} />
                                              </div>
                                              <div className="review_quote">
                                                  <img src={quote} alt="quote" />
                                              </div>
                                          </div>
                                          <div className="reviw_second_box">
                                              <div className="review_outer d-flex justify-content-between">
                                                  <div className="client_review_detail_outer">
                                                      <div className="clinet_review_name">
                                                          <p>{review.customer}</p>
                                                      </div>
                                                      <div className="clinet_review_days">
                                                          <p>{new Date(review.creation).toDateString()}</p>
                                                      </div>
                                                  </div>
                                                  <div className="clinet_review_star">
                                                      {renderStars(parseInt(review.rating))}
                                                  </div>
                                              </div>
                                              <div className="review_content">
                                                  <p>{review.comment}</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      ))}

                  </>
              )}
          </div>
      </section>
  )
}

export default ReviewComponent2;
