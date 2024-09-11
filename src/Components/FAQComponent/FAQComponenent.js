import React, { useEffect, useState } from "react";
import "./FAQComponenent.css";
import wrong from "../../images/wrong_icon_bg.png";
import faqBG from "../../images/faq_bg_2.png";
import title from "../../images/title_img.png";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { fetchFAQData } from "../../api/FAQ/faqDataApi";

const FAQComponenent = ({expand}) => {

  const [FAQdata, setFAQdata] = useState(null)
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);
  let middleIndex = null;


  useEffect(()=>{
    const loadFAQData = async()=> {
      try {
        const data = await fetchFAQData();
        setFAQdata(data)
      } catch (error) {
        console.error("Error Loading FAQ Data", error)
      }
    }

    loadFAQData();
  },[])


  useEffect(()=>{
    if(FAQdata){
      if(expand){
        middleIndex = Math.ceil(FAQdata.faq.length/2);
        setFirstHalf(FAQdata.faq.slice(0,middleIndex));
        setSecondHalf(FAQdata.faq.slice(middleIndex));
      }else{
        middleIndex = Math.ceil(FAQdata.faq.slice(0,10).length/2);
        setFirstHalf(FAQdata.faq.slice(0,middleIndex));
        setSecondHalf(FAQdata.faq.slice(middleIndex,10));
      }
    }
    
  },[FAQdata?.faq])


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
                  <h4>{FAQdata?.section_title}</h4>
                </div>
              </div>
              <div class="troo_da_hero_we_r_done_title">
                <h2>{FAQdata?.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="our_faq_left">
              <Accordion>
                {FAQdata && firstHalf.map((each,index)=>(
                  <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>
                      <h5>{each.question}</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{each.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="our_faq_right">
              <Accordion>
                {FAQdata && secondHalf.map((each,index)=>(
                  <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>
                      <h5>{each.question}</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{each.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        {!expand && 
        <div class="troo_da_about_we_r_done_btn text-center">
          <Link to={FAQdata?.button_link}>
          <button type="button" class="btn btn-primary">
            See All FAQ’s
          </button>
          </Link>
        </div>}
      </div>
    </section>
  );
};

export default FAQComponenent;
