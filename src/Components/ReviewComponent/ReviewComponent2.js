import React, { useState, useEffect } from "react";
import "./ReviewComponent.css"
import { FaStar } from 'react-icons/fa';
import reviewBG1 from "../../images/client_review_bg_1.png"
import reviewBG2 from "../../images/client_review_bg_2.png"
import reviewBG3 from "../../images/client_review_bg_3.png"
import reviewBG4 from "../../images/client_review_bg_4.png"
import title from "../../images/title_img.png"

import quote from '../../images/quote.png'
import { Link } from 'react-router-dom';
import ApiFacade from '../../api/facade';


const ReviewComponent2 = () => {


    const [customerReviewData, setCustomerReviewData] = useState(null);

    useEffect(() => {
        const loadCustomerReviewData = async () => {
            try {
                const data = await ApiFacade.fetchCustomerReviews();
                setCustomerReviewData(data.slice(0, 4)); // Slice to get only 4 reviews
            } catch (error) {
                console.error('Error loading reviews:', error);
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
    return (
        <section class="troo_da_client_reviews_wrapper">
            <div class="review_bg_1 review_ani">
                <img src={reviewBG1} alt="client_review_bg_1" />
            </div>
            <div class="review_bg_2 review_ani">
                <img src={reviewBG2} alt="client_review_bg_2" />
            </div>
            <div class="review_bg_3 review_ani">
                <img src={reviewBG3} alt="client_review_bg_3" />
            </div>
            <div class="review_bg_4 review_ani">
                <img src={reviewBG4} alt="choose_people_vector_4" />
            </div>
            <div class="review_bg_5 review_ani">
                <img src={reviewBG3} alt="choose_people_vector_3" />
            </div>
            <div class="review_bg_6 review_ani">
                <img src={reviewBG4} alt="client_review_bg_4" />
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
                                <h2>See our trusted clients
                                    what say about us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {customerReviewData?.slice(0, 2).map((review, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className={`client_review_box ${index === 1 ? 'client_box_2' : ''}`}>
                                <div className="client_review_img_outer">
                                    <div className="client_review_img">
                                        <img src={`https://admin-fixify.glascutr.com${review.customer_image}`} alt={`review_img_${index + 1}`} />
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
                <div class="row review_row">
                    {customerReviewData?.slice(2, 4).map((review, index) => (

                        <div class="col-lg-6" key={index}>
                            <div className={`client_review_box ${index === 3 ? 'client_box_4' : ''}`}>
                                <div class="client_review_img_outer">
                                    <div class="client_review_img">
                                        <img src={`https://admin-fixify.glascutr.com${review.customer_image}`} alt={`review_img_${index + 1}`} />
                                    </div>
                                    <div class="review_quote">
                                        <img src={quote} alt="quote" />
                                    </div>
                                </div>
                                <div class="reviw_second_box">
                                    <div class="review_outer d-flex justify-content-between">
                                        <div class="client_review_detail_outer">
                                            <div class="clinet_review_name">
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
                                    <div class="review_content">
                                        <p>{review.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div class="troo_da_about_we_r_done_btn text-center">
                    <Link to="/Home/Testimonial">
                        <button type="button" class="btn btn-primary">See More Review</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ReviewComponent2