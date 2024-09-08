import React from "react";
import "./FAQComponenent.css";
import wrong from "../../images/wrong_icon_bg.png";
import faqBG from "../../images/faq_bg_2.png";
import title from "../../images/title_img.png";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const FAQComponenent = () => {
  return (
    <section class="our_faq_wrapper">
      <div class="faq_bg_1 action">
        <img src={wrong} alt="wrong_icon_bg" />
      </div>
      <div class="faq_bg_2 action ">
        <img src={faqBG} alt="faq_bg_2" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="troo_da_hand_we_r_done_title_outer m-auto text-center">
              <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>Do you have Questions?</h4>
                </div>
              </div>
              <div class="troo_da_hero_we_r_done_title">
                <h2>Frequently asked questions</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="our_faq_left">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>How Much Does A Handyman Charge Per Hour?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h5>What Kind Of Work Can A Handyman Do?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h5>Does A Handyman Need Insurance?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                   <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                   <h5> Can A Handyman Do Plumbing Work?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="our_faq_right">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                   <h5> How Much Does A Handyman Charge Per Hour?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h5>What Kind Of Work Can A Handyman Do?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h5>Does A Handyman Need Insurance?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h5>Can A Handyman Do Plumbing Work?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div class="troo_da_about_we_r_done_btn text-center">
          <Link to="/Home/FAQ">
          <button type="button" class="btn btn-primary">
            See All FAQ’s
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQComponenent;
