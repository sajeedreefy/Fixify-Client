import React from 'react'
import "./Footer.css"
import footerbg from "../../images/footer_bg_1.png"
import choose1 from "../../images/people_choose_bg_1.png"
import choose2 from "../../images/people_choose_bg_2.png"
import choose3 from "../../images/people_choose_bg_3.png"
import choose4 from "../../images/people_choose_bg_4.png"
import choose5 from "../../images/people_choose_bg_5.png"
import choose6 from "../../images/people_choose_bg_6.png"
import choose7 from "../../images/people_choose_bg_7.png"
import call from "../../images/call.png"
import mail from "../../images/maill.png"
import location from "../../images/location.png"
import arrow from "../../images/rightt_arrow.png"
import logo from "../../images/Footer_Logo.png"

const Footer = () => {
  return (
    <footer>
        <span class="footer_bg_img">
            <img src={footerbg} alt="footer_bg_1" />
        </span>
        <span class="footer_bg_2 review_ani">
            <img src={choose1} alt="choose_people_vector_1" />
        </span>
        <span class="footer_bg_3 review_ani">
            <img src={choose2} alt="choose_people_vector_2" />
        </span>
        <span class="footer_bg_4 review_ani">
            <img src={choose3} alt="choose_people_vector_3"/>
        </span>
        <span class="footer_bg_5 review_ani">
            <img src={choose4} alt="choose_people_vector_4" />
        </span>
        <span class="footer_bg_6 review_ani">
            <img src={choose5} alt="choose_people_vector_5" />
        </span>
        <span class="footer_bg_7 review_ani">
            <img src={choose6} alt='choose6' />
        </span>
        <span class="footer_bg_8 review_ani">
            <img src={choose7} alt="choose_people_vector_7" />
        </span>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="footer_Logo">
                        <img src={logo} alt="Footer_Logo" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="footer_menu">
                        <ul class="footer_ul d-flex justify-content-end">
                            <li><a href="javascript:;">Home</a></li>
                            <li><a href="javascript:;">About Us</a></li>
                            <li><a href="javascript:;">Services</a></li>
                            <li><a href="javascript:;">Blogs</a></li>
                            <li><a href="javascript:;">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer_box">
                        <div class="footer_title">
                            <h4>Contact Info</h4>
                        </div>
                        <div class="footer_call_detail">
                            <p>Call us</p>
                        </div>
                        <div class="footer_call_outer d-flex">
                            <div class="footer_call_img">
                                <img src={call} alt="call" />
                            </div>
                            <div class="footer_call">
                                <a href="tel:+44 123 456 7065">+44 123 456 7065</a><br/>
                                <a href="tel:++44 7065 123 456">+44 7065 123 456</a>
                            </div>
                        </div>
                        <div class="footer_mail_detail">
                            <p>Email us</p>
                        </div>
                        <div class="footer_call_outer d-flex">
                            <div class="footer_call_img">
                                <img src={mail} alt="mail" />
                            </div>
                            <div class="footer_call">
                                <a href="mailto:troohanyman@email.com">troohanyman@email.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer_box">
                        <div class="footer_title">
                            <h4>Our Address</h4>
                        </div>
                        <div class="footer_call_detail">
                            <p>Location</p>
                        </div>
                        <div class="footer_call_outer d-flex">
                            <div class="footer_call_img">
                                <img src={location} alt="location" />
                            </div>
                            <div class="footer_call">
                                <address>
                                    Raya Kuta Chartered No.70 Street,
                                    United Kingdom, EH2 1TT
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer_box">
                        <div class="footer_title">
                            <h4>Opening Hours</h4>
                        </div>
                        <div class="footer_call_detail">
                            <p>office time</p>
                        </div>
                        <div class="footer_call_outer d-flex">
                            <div class="footer_call_img">
                                <img src={location} alt="location" />
                            </div>
                            <div class="footer_call">
                                <p>Mon to Sat: 10:00 AM to 06:00 PM</p>
                                <p>Every Sunday closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer_box footer_last_box">
                        <div class="footer_title">
                            <h4>Newsletter</h4>
                        </div>
                        <div class="footer_form">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Your email address" />
                                </div>
                                <div class="footer_form_submit_btn">
                                    <button type="submit" class="btn btn-primary">
                                        <img src={arrow} alt="rightt_arrow" />
                                    </button>
                                </div>

                            </form>
                        </div>
                        <div class="troo_da_top_header_inner d-flex">
                            <span>Connect with us</span>
                            <ul class="top_header_list d-flex">
                                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="footer_bottom_box">
                        <p>Terms & Conditions / Privacy Policy</p>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="footer_bottom_box">
                        <p>© 2022 Restaurant Theme by <span>Troo Theme</span>. All rights reserved</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer_bottom_box text-end">
                        <p>FAQ’s / Site map</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer