import React, { useState } from "react";
import "./Highlight.css";
import title from "../../images/title_img.png";
import highlight1 from "../../images/people_choose_bg_1.png";
import highlight2 from "../../images/people_choose_bg_2.png";
import highlight3 from "../../images/people_choose_bg_5.png";
import highlight4 from "../../images/people_choose_bg_4.png";
import highlight5 from "../../images/people_choose_bg_7.png";
import highlight6 from "../../images/people_choose_bg_3.png";
import highlight7 from "../../images/people_choose_bg_6.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";

const Highlight = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section class="troo_da_people_choose_wrapper">
      <div class="choose_people_vector_1 move">
        <img src={highlight1} alt="choose_people_vector_1" />
      </div>
      <div class="choose_people_vector_2 move">
        <img src={highlight2} alt="choose_people_vector_2" />
      </div>
      <div class="choose_people_vector_5 move">
        <img src={highlight3} alt="choose_people_vector_5" />
      </div>
      <div class="choose_people_vector_4 moveY">
        <img src={highlight4} alt="choose_people_vector_4" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="troo_da_people_choose_left">
              <div class="troo_da_hero_small_outer d-flex">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>Why people choose us</h4>
                </div>
              </div>
              <div class="troo_da_people_choose_title">
                <h2>
                  It’s simple. we’re here for you.
                  <span>troo handyman</span> services
                </h2>
              </div>
              <div class="troo_da_people_choose_content">
                <p>
                  Lorem Ipsum is simply dummy and is text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's and
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div class="troo_da_people_choose_list">
                <h4>Our features</h4>
                <div class="troo_da_people_choose_list_ul d-flex justify-content-between">
                  <div class="troo_da_people_chooseList_box">
                    <p>An affordable pricing plan</p>
                    <p>All type repairs and maintence</p>
                    <p>Commercial & Industrial Services</p>
                  </div>
                  <div class="troo_da_people_chooseList_box_2">
                    <p>We have morden technology to do work</p>
                    <p>Work finish before deadline</p>
                    <p>We provide 24X7 emergency services</p>
                  </div>
                </div>
              </div>
              <div class="people_choose_btn">
                <Link to="/Home/Our_Services">
                <button type="button" class="btn btn-primary">
                  See All Services
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="troo_da_people_choose_right_side">
              <div class="row">
                <div class="col-lg-6">
                  <div class="troo_da_people_choose_right_box">
                    <div class="troo_da_detail_box_img">
                      <svg
                        width="62"
                        height="62"
                        viewBox="0 0 62 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M60.1667 28.3333V31.0166C60.1631 37.3062 58.1265 43.4261 54.3606 48.4636C50.5947 53.5011 45.3013 57.1863 39.2698 58.9697C33.2384 60.753 26.792 60.5388 20.8922 58.3592C14.9924 56.1795 9.95525 52.1511 6.53198 46.8747C3.1087 41.5984 1.48273 35.3568 1.89657 29.0809C2.3104 22.8049 4.74186 16.8309 8.82833 12.0497C12.9148 7.26859 18.4373 3.93648 24.5722 2.55037C30.7072 1.16427 37.1258 1.79843 42.8709 4.35828M60.1667 7.66659L31 36.8624L22.25 28.1124"
                          stroke="#022539"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="troo_da_people_choose_right_box_detail">
                      {/* <h4>950+</h4> */}
                      <ScrollTrigger
                        onEnter={() => setCounter(true)}
                        onExit={() => setCounter(false)}
                        className="counter"
                      >
                        {counter && (
                          <CountUp start={800} end={950} duration={3} delay={0} />
                        )}
                        <strong>+</strong>
                      </ScrollTrigger>
                      <p>Projects Complite</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="troo_da_people_choose_right_box two">
                    <div class="troo_da_detail_box_img">
                      <svg
                        width="62"
                        height="61"
                        viewBox="0 0 62 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 53.5876H21.1133C22.106 53.5876 23.0926 53.7058 24.0548 53.942L32.0992 55.8968C33.8447 56.3221 35.6631 56.3634 37.4268 56.0209L46.3212 54.2904C48.6707 53.8327 50.8321 52.7076 52.526 51.0599L58.8188 44.9384C60.6159 43.1932 60.6159 40.3614 58.8188 38.6132C57.2008 37.0393 54.6388 36.8621 52.8083 38.1968L45.4742 43.5476C44.4239 44.3154 43.1459 44.7288 41.8315 44.7288H34.7494L39.2573 44.7286C41.7981 44.7286 43.8562 42.7265 43.8562 40.2549V39.3601C43.8562 37.3078 42.4204 35.5183 40.3744 35.0222L33.4167 33.3302C32.2844 33.0556 31.1248 32.9168 29.9591 32.9168C27.1451 32.9168 22.0513 35.2466 22.0513 35.2466L13.5 38.8227M1.83331 37.5834L1.83331 54.5001C1.83331 56.1336 1.83331 56.9503 2.15121 57.5742C2.43084 58.123 2.87703 58.5692 3.42584 58.8489C4.04975 59.1668 4.86649 59.1668 6.49998 59.1668H8.83331C10.4668 59.1668 11.2835 59.1668 11.9075 58.8489C12.4563 58.5692 12.9025 58.123 13.1821 57.5742C13.5 56.9503 13.5 56.1336 13.5 54.5001V37.5834C13.5 35.95 13.5 35.1332 13.1821 34.5093C12.9025 33.9605 12.4563 33.5143 11.9075 33.2347C11.2835 32.9168 10.4668 32.9168 8.83331 32.9168H6.49998C4.86649 32.9168 4.04975 32.9168 3.42584 33.2347C2.87704 33.5143 2.43084 33.9605 2.15121 34.5093C1.83331 35.1332 1.83331 35.9499 1.83331 37.5834ZM46.1415 5.47751C44.4008 1.83501 40.3875 -0.0946935 36.4846 1.76785C32.5816 3.6304 30.9189 8.04746 32.553 11.925C33.5629 14.3214 36.4563 18.9751 38.5194 22.1806C39.2817 23.365 39.6628 23.9572 40.2195 24.3036C40.6971 24.6008 41.2948 24.761 41.8569 24.7424C42.5123 24.7207 43.1385 24.3984 44.3908 23.7539C47.7803 22.0093 52.6129 19.4259 54.6857 17.8555C58.0396 15.3144 58.8704 10.6439 56.3594 7.0933C53.8484 3.54274 49.4702 3.19337 46.1415 5.47751Z"
                          stroke="#022539"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="troo_da_people_choose_right_box_detail">
                      {/* <h4>1062++</h4> */}
                      <ScrollTrigger
                        onEnter={() => setCounter(true)}
                        onExit={() => setCounter(false)}
                        className="counter"
                      >
                        {counter && (
                          <CountUp start={900} end={1062} duration={3} delay={0} />
                        )}
                        <strong>+</strong>
                      </ScrollTrigger>
                      <p>Projects Complite</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="troo_da_people_choose_right_box people_choose_box-3">
                    <div class="troo_da_detail_box_img">
                      <svg
                        width="58"
                        height="62"
                        viewBox="0 0 58 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8105 28.6344L3.71336 8.77643C2.43736 6.49306 1.79935 5.35137 1.90687 4.41662C2.00068 3.60108 2.43383 2.86283 3.09999 2.3831C3.86352 1.83325 5.17138 1.83325 7.78709 1.83325H14.3053C15.2774 1.83325 15.7635 1.83325 16.1995 1.97364C16.5852 2.09787 16.9409 2.30113 17.2438 2.57047C17.586 2.87485 17.8327 3.29364 18.3261 4.13122L29 22.2499L39.6739 4.13122C40.1673 3.29364 40.414 2.87485 40.7562 2.57047C41.0591 2.30113 41.4148 2.09787 41.8005 1.97364C42.2365 1.83325 42.7226 1.83325 43.6947 1.83325H50.2129C52.8286 1.83325 54.1365 1.83325 54.9 2.3831C55.5662 2.86283 55.9993 3.60108 56.0931 4.41662C56.2007 5.35137 55.5627 6.49306 54.2866 8.77643L43.1895 28.6344M24.625 36.8333L29 33.9166V48.4999M25.3542 48.4999H32.6458M42.4056 27.8027C49.8093 35.2063 49.8093 47.2101 42.4056 54.6138C35.0019 62.0175 22.9981 62.0175 15.5944 54.6138C8.19075 47.2102 8.19075 35.2064 15.5944 27.8027C22.9981 20.399 35.0019 20.399 42.4056 27.8027Z"
                          stroke="#022539"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="troo_da_people_choose_right_box_detail">
                      {/* <h4>320+</h4> */}
                      <ScrollTrigger
                        onEnter={() => setCounter(true)}
                        onExit={() => setCounter(false)}
                        className="counter"
                      >
                        {counter && (
                          <CountUp start={150} end={320} duration={3} delay={0} />
                        )}
                        <strong>+</strong>
                      </ScrollTrigger>
                      <p>National Award Win</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="troo_da_people_choose_right_box two people_choose_box-4">
                    <div class="troo_da_detail_box_img">
                      <svg
                        width="61"
                        height="56"
                        viewBox="0 0 61 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.5 39.1909C52.7464 41.3241 56.3871 44.7474 59.0445 49.0281C59.5707 49.8758 59.8338 50.2996 59.9248 50.8866C60.1097 52.0793 59.294 53.5457 58.1832 54.0177C57.6365 54.25 57.0216 54.25 55.7917 54.25M42.6667 26.6357C46.9884 24.488 49.9583 20.0283 49.9583 14.875C49.9583 9.72166 46.9884 5.26199 42.6667 3.1143M36.8333 14.875C36.8333 22.1237 30.9571 28 23.7083 28C16.4596 28 10.5833 22.1237 10.5833 14.875C10.5833 7.62626 16.4596 1.75 23.7083 1.75C30.9571 1.75 36.8333 7.62626 36.8333 14.875ZM3.46443 48.2368C8.1145 41.2549 15.4523 36.75 23.7083 36.75C31.9643 36.75 39.3022 41.2549 43.9523 48.2368C44.971 49.7664 45.4803 50.5311 45.4217 51.5081C45.376 52.2688 44.8774 53.2 44.2696 53.6596C43.489 54.25 42.4153 54.25 40.2681 54.25H7.14855C5.00134 54.25 3.92774 54.25 3.14713 53.6596C2.53932 53.2 2.04069 52.2688 1.99503 51.5081C1.93639 50.5311 2.44574 49.7664 3.46443 48.2368Z"
                          stroke="#022539"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="troo_da_people_choose_right_box_detail">
                      {/* <h4>111+</h4> */}
                      <ScrollTrigger
                        onEnter={() => setCounter(true)}
                        onExit={() => setCounter(false)}
                        className="counter"
                      >
                        {counter && (
                          <CountUp start={0} end={111} duration={3} delay={0} />
                        )}
                        <strong>+</strong>
                      </ScrollTrigger>
                      <p>Expert Team Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="choose_people_vector_7 moveY">
          <img src={highlight5} alt="choose_people_vector_7" />
        </div>
        <div class="choose_people_vector_3 move">
          <img src={highlight6} alt="choose_people_vector_3" />
        </div>
        <div class="choose_people_vector_6 move">
          <img src={highlight7} alt="choose_people_vector_6" />
        </div>
      </div>
    </section>
  );
};

export default Highlight;
