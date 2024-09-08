import React from 'react'
import "./PricingcardComponent.css"
import title from "../../images/title_img.png"
import { Link } from 'react-router-dom'

const PricingcardComponent = () => {
  return (
    <section class="troo_da_pricing_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="priciing_title_outer">
                        <div class="troo_da_hero_small_outer about d-flex">
                            <div class="troo_da_small_title_img zoom-in-zoom-out">
                                <img src={title} alt="title_img"/>
                            </div>
                            <div class="troo_da_hero_left_small_title">
                                <h4>Our pricing plans</h4>
                            </div>
                        </div>
                        <div class="troo_da_about_hero_handyman_title">
                            <h2>We provide best plan
                                for your needs</h2>
                        </div>
                    </div>

                </div>
                <div class="col-lg-4">
                    <div class="pricing_title_content">
                        <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting industry. Lorem Ipsum
                            has been.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="troo_da_about_we_r_done_btn text-end">
                        <Link to="/">
                        <button type="button" class="btn btn-primary">See All Plans</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="pricing_box">
                        <div class="pricing_inner">
                            <div class="pricing_title">
                                <h3>Professional</h3>
                                <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting.</p>
                            </div>
                            <div class="pricing_tag_outer d-flex align-items-center">
                                <h4>$</h4>
                                <p>50.00</p><span class="price_month">/ per month</span>
                            </div>
                            <div class="pricing_list">
                                <ul class="pricing_list_ul">
                                    <li>24/7 Tech Support</li>
                                    <li>Advanced Options</li>
                                    <li>2 Inspaction</li>
                                    <li>Fixing faulty things </li>
                                    <li>General repairs</li>
                                </ul>
                            </div>
                            <div class="pricing_btn">
                                <button type="button" class="btn btn-primary">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="pricing_box hover_box">
                        <div class="hover_box_add">
                            <div class="hover_box_txt">
                                <p>Most popular plane</p>
                            </div>
                        </div>
                        <div class="pricing_inner">
                            <div class="pricing_title">
                                <h3>Standard</h3>
                                <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting.</p>
                            </div>
                            <div class="pricing_tag_outer d-flex align-items-center">
                                <h4>$</h4>
                                <p>70.00</p><span class="price_month">/ per month</span>
                            </div>
                            <div class="pricing_list">
                                <ul class="pricing_list_ul">
                                    <li>24/7 Tech Support</li>
                                    <li>Advanced Options</li>
                                    <li>2 Inspaction</li>
                                    <li>Fixing faulty things </li>
                                    <li>General repairs</li>
                                </ul>
                            </div>
                            <div class="pricing_btn">
                                <button type="button" class="btn btn-primary">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="pricing_box">
                        <div class="pricing_inner">
                            <div class="pricing_title">
                                <h3>Advance</h3>
                                <p>Lorem Ipsum is simply dummy and is text of the printing and typesetting.</p>
                            </div>
                            <div class="pricing_tag_outer d-flex align-items-center">
                                <h4>$</h4>
                                <p>90.00</p><span class="price_month">/ per month</span>
                            </div>
                            <div class="pricing_list">
                                <ul class="pricing_list_ul">
                                    <li>24/7 Tech Support</li>
                                    <li>Advanced Options</li>
                                    <li>2 Inspaction</li>
                                    <li>Fixing faulty things </li>
                                    <li>General repairs</li>
                                </ul>
                            </div>
                            <div class="pricing_btn">
                                <button type="button" class="btn btn-primary">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default PricingcardComponent