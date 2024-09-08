import React from 'react'
import "./ReviewComponent.css"
import { FaStar } from 'react-icons/fa';
import reviewBG1 from "../../images/client_review_bg_1.png"
import reviewBG2 from "../../images/client_review_bg_2.png"
import reviewBG3 from "../../images/client_review_bg_3.png"
import reviewBG4 from "../../images/client_review_bg_4.png"
import title from "../../images/title_img.png"
import review1 from "../../images/review_img_1.png"
import review2 from "../../images/review_img_2.png"
import review3 from "../../images/review_img_3.png"
import review4 from "../../images/review_img_4.png"
import quote from '../../images/quote.png'
import { Link } from 'react-router-dom';


const ReviewComponent = () => {
  return (
    <section class="troo_da_client_reviews_wrapper">
        <div class="review_bg_1 review_ani">
            <img src={reviewBG1} alt="client_review_bg_1"/>
        </div>
        <div class="review_bg_2 review_ani">
            <img src={reviewBG2} alt="client_review_bg_2"/>
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
                <div class="col-lg-6">
                    <div class="client_review_box">
                        <div class="client_review_img_outer">
                            <div class="client_review_img">
                                <img src={review1} alt="review_img_1" />
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
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                            </div>
                            <div class="review_content">
                                <p>Lorem ipsum dolor amet consectetur do & eiusmod tempor incididunt & labore they enim
                                    minim veniam Lorem ipsum dolor amet consectetur </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="client_review_box client_box_2">
                        <div class="client_review_img_outer">
                            <div class="client_review_img">
                                <img src={review2} alt="review_img_2" />
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
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                </div>
                            </div>
                            <div class="review_content">
                                <p>Lorem ipsum dolor amet consectetur do & eiusmod tempor incididunt & labore they enim
                                    minim veniam Lorem ipsum dolor amet consectetur </p>
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
                                <img src={review3} alt="review_img_3" />
                            </div>
                            <div class="review_quote">
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div class="reviw_second_box">
                            <div class="review_outer d-flex justify-content-between">
                                <div class="client_review_detail_outer">
                                    <div class="clinet_review_name">
                                        <p>Denial Cooper
                                        </p>
                                    </div>
                                    <div class="clinet_review_days">
                                        <p>2 day ago</p>
                                    </div>
                                </div>
                                <div class="clinet_review_star">
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                </div>
                            </div>
                            <div class="review_content">
                                <p>Lorem ipsum dolor amet consectetur do & eiusmod tempor incididunt & labore they enim
                                    minim veniam Lorem ipsum dolor amet consectetur </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="client_review_box client_box_4">
                        <div class="client_review_img_outer">
                            <div class="client_review_img">
                                <img src={review4} alt="review_img_4" />
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
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                  <FaStar/>
                                </div>
                            </div>
                            <div class="review_content">
                                <p>Lorem ipsum dolor amet consectetur do & eiusmod tempor incididunt & labore they enim
                                    minim veniam Lorem ipsum dolor amet consectetur </p>
                            </div>
                        </div>
                    </div>
                </div>
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

export default ReviewComponent