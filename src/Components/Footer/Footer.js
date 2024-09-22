import React, { useEffect, useState } from "react";
import "./Footer.css";
import footerbg from "../../images/footer_bg_1.png";
import choose1 from "../../images/people_choose_bg_1.png";
import choose2 from "../../images/people_choose_bg_2.png";
import choose3 from "../../images/people_choose_bg_3.png";
import choose4 from "../../images/people_choose_bg_4.png";
import choose5 from "../../images/people_choose_bg_5.png";
import choose6 from "../../images/people_choose_bg_6.png";
import choose7 from "../../images/people_choose_bg_7.png";
import call from "../../images/call.png";
import mail from "../../images/maill.png";
import location from "../../images/location.png";
import arrow from "../../images/rightt_arrow.png";
import { fetchNavItems } from "../../api/NavigationItems/navigationItemsAPI";
import fetchPreferenceAPI from "../../api/preference/preferenceAPI";
import { Link } from "react-router-dom";
import postNewsletterAPI from "../../api/newsletter/newsletterAPI";
import ApiFacade from "../../api/facade";
import { ShimmerPostItem, ShimmerTable } from "react-shimmer-effects";

const Footer = () => {
  const [navItems, setNavItems] = useState(null);
  const [preferenceItems, setPreferenceItems] = useState(null);
  const [navLoading, setNavLoading] = useState(true);
  const [preferenceLoading, setPreferenceLoading] = useState(true); // Added for preference loading state

  const [formData, setFormData] = useState({
    email: "",
  });

  useEffect(() => {
    const loadTopNavItems = async () => {
      try {
        const data = await ApiFacade.fetchNavItemsData();
        setNavItems(data);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setNavLoading(false);
      }
    };

    loadTopNavItems();
  }, []);

  useEffect(() => {
    const loadPreference = async () => {
      try {
        const data = await ApiFacade.fetchPreferenceData();
        setPreferenceItems(data);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setPreferenceLoading(false);
      }
    };

    loadPreference();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create customer
      const newsLetterPayload = {
        newsLetter_email: formData.email,
      };
      const newsLetterResponse = await postNewsletterAPI(newsLetterPayload);

      // Create quotation
      setFormData({ email: "" });

      alert("Email received successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error processing your request.");
    }
  };

  if (navLoading || preferenceLoading) {
    return <ShimmerTable row={3} col={1} />;
  }

  return (
    <>
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
          <img src={choose3} alt="choose_people_vector_3" />
        </span>
        <span class="footer_bg_5 review_ani">
          <img src={choose4} alt="choose_people_vector_4" />
        </span>
        <span class="footer_bg_6 review_ani">
          <img src={choose5} alt="choose_people_vector_5" />
        </span>
        <span class="footer_bg_7 review_ani">
          <img src={choose6} alt="choose6" />
        </span>
        <span class="footer_bg_8 review_ani">
          <img src={choose7} alt="choose_people_vector_7" />
        </span>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="footer_Logo">
                <Link to="/">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}${preferenceItems?.site_logo}`}
                    style={{ height: "58px" }}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_menu">
                <ul className="footer_ul d-flex justify-content-end">
                  {navItems.length > 0 ? (
                    navItems.map((item, index) => (
                      <li key={index}>
                        <a href={item.path}>{item.title}</a>
                      </li>
                    ))
                  ) : (
                    <li>Loading menu...</li>
                  )}
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
                  <div className="footer_call">
                    {preferenceItems &&
                      preferenceItems.phone_numbers &&
                      preferenceItems.phone_numbers.map((phoneObj, index) => (
                        <div key={index}>
                          <a href={`tel:${phoneObj.phone}`}>{phoneObj.phone}</a>
                          <br />
                        </div>
                      ))}
                  </div>
                </div>
                <div class="footer_mail_detail">
                  <p>Email us</p>
                </div>
                <div class="footer_call_outer d-flex">
                  <div class="footer_call_img">
                    <img src={mail} alt="mail" />
                  </div>
                  <div className="footer_call">
                    {preferenceItems &&
                      preferenceItems.email_addresses &&
                      preferenceItems.email_addresses.map((emailObj, index) => (
                        <div key={`email-${index}`}>
                          <a href={`mailto:${emailObj.email}`}>
                            {emailObj.email}
                          </a>
                          <br />
                        </div>
                      ))}
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
                    <address>{preferenceItems?.address}</address>
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
                    <p>{preferenceItems?.opening_hours}</p>
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
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        value={formData?.email}
                        aria-describedby="emailHelp"
                        placeholder="Your email address"
                        onChange={handleInputChange}
                        required
                      />
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
                    <li>
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </li>
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
                <p>
                  © 2024 Fixify Web App by <span>Glascutr Limited</span>. All
                  rights reserved
                </p>
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
    </>
  );
};

export default Footer;
