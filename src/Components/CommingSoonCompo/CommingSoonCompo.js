import React from "react";
import "./CommingSoonComp.css";
import commingSoon1 from "../../images/coming_soon.png"
import commingSoon2 from "../../images/people_choose_bg_2.png"
import commingSoon3 from "../../images/people_choose_bg_6.png"
import commingSoon4 from "../../images/people_choose_bg_5.png"
import commingSoon5 from "../../images/people_choose_bg_4.png"
import commingSoon6 from "../../images/people_choose_bg_3.png"
import commingimg from "../../images/comin_soon_img.png"
import title from "../../images/title_img.png"

const CommingSoonCompo = () => {
  return (
    <section class="coming_soon_wrapper">
      <div class="choose_people_vector_1">
        <img
          src={commingSoon1}
          alt="choose_people_vector_1"
        />
      </div>
      <div class="choose_people_vector_2">
        <img
          src={commingSoon2}
          alt="choose_people_vector_2"
        />
      </div>
      <div class="choose_people_vector_6">
        <img
          src={commingSoon3}
          alt="choose_people_vector_6"
        />
      </div>
      <div class="choose_people_vector_5">
        <img
          src={commingSoon4}
          alt="choose_people_vector_5"
        />
      </div>
      <div class="choose_people_vector_4">
        <img
          src={commingSoon5}
          alt="choose_people_vector_4"
        />
      </div>
      <div class="choose_people_vector_3">
        <img
          src={commingSoon6}
          alt="choose_people_vector_3"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="comin_soon_img">
              <img src={commingimg} alt="coming_soon" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cooming_soon_detail">
              <div class="troo_da_hero_small_outer d-flex">
                <div class="troo_da_small_title_img zoom-in-zoom-out">
                  <img src={title} alt="title_img" />
                </div>
                <div class="troo_da_hero_left_small_title">
                  <h4>Do you have Questions?</h4>
                </div>
              </div>
              <div class="coming_soon_title">
                <h1>
                  We Will <br />
                  Lounching our <br />
                  <span>Website</span> Very Soon
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed nunc luctus quam faucibus rhoncus.
                </p>
              </div>
              <div class="footer_form">
                <form>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="footer_form_submit_btn">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommingSoonCompo;
