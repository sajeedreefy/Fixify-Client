import React from "react";
import "./ProjectDetails.css";
import { Link } from "react-router-dom";
import play from "../../images/play_btn.png"
import projectDetails1 from "../../images/project_detail_1.png"
import projectDetails2 from "../../images/project_detail_2.png"
import projectDetails3 from "../../images/project_detail_3.png"
import projectDetails4 from "../../images/project_detail_4.png"
import projectDetails5 from "../../images/project_detail_5.png"

const ProjectDetailsComponent = () => {
  return (
    <section class="project_detail_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="service_box_wrapper_right_side project_left_side">
              <div class="other_box">
                <div class="other_list">
                  <div class="footer_title">
                    <h4>Other Services</h4>
                  </div>
                  <ul class="other_list_ul">
                    <li>Painting Services</li>
                    <li>Plumbing Services</li>
                    <li>Painting Services</li>
                    <li>Home Renovation Services</li>
                    <li>Electrical Services</li>
                    <li>Caroenter Services</li>
                  </ul>
                </div>
              </div>
              <div class="need_any_help_box">
                <div class="footer_title">
                  <h4>Need Any Help?</h4>
                </div>
                <div class="footer_call_detail">
                  <p>Call us</p>
                </div>
                <div class="footer_call">
                  <a href="tel:+44 123 456 7065">+44 123 456 7065</a>
                </div>
                <div class="footer_mail_detail">
                  <p>Email us</p>
                </div>
                <div class="footer_call">
                  <a href="mailto:troohanyman@email.com">
                    troohanyman@email.com
                  </a>
                </div>
                <div class="need_any_help_conct_btn">
                  <button type="button" class="btn btn-primary">
                    Contact with Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="project_right_box">
              <div class="project_title">
                <h2>Project images and details</h2>
              </div>
              <div class="project_sub_title">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dolor eu dui elementum hendrerit in sed metus. Sed
                  consectetur nunc luctus quam faucibus rhoncus.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dolor eu dui elementum hendrerit in sed metus. Sed
                  consectetur nunc luctus quam faucibus rhoncus. Quisque sit
                  amet dolor lobortis, dignissim magna ut, tincidunt nulla. Sed
                  nec nibh nec augue egestas porttitor. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Vivamus varius augue eleifend arcu scelerisque, id
                  dignissim eros mattis. Morbi congue vestibulum erat sit amet
                  gravida.
                </p>
              </div>
              <div class="row">
                <div class="col-lg-8">
                  <div class="project_gallary_box">
                    <img
                      src={projectDetails1}
                      alt="Project"
                    />
                    <div class="project_box_hover">
                      <Link
                        class="popup-youtube"
                        href="https://www.youtube.com/watch?v=bY-mOdgz7zQ"
                        target="_blank"
                      >
                        <img
                          src={play}
                          alt="play_btn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="project_gallary_box second_box">
                    <img
                      src={projectDetails2}
                      alt="Project"
                    />
                    <div class="project_box_hover">
                      <Link
                        class="popup-youtube"
                        href="https://www.youtube.com/watch?v=bY-mOdgz7zQ"
                        target="_blank"
                      >
                        <img
                         src={play}
                          alt="play_btn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="project_third_box">
                    <img
                      src={projectDetails3}
                      alt="project_detail_3"
                    />
                    <div class="project_box_hover">
                      <Link
                        class="popup-youtube"
                        href="https://www.youtube.com/watch?v=bY-mOdgz7zQ"
                        target="_blank"
                      >
                        <img
                          src={play}
                          alt="play_btn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="project_third_box">
                    <img
                      src={projectDetails4}
                      alt="project_detail_4"
                    />
                    <div class="project_box_hover">
                      <Link
                        class="popup-youtube"
                        href="https://www.youtube.com/watch?v=bY-mOdgz7zQ"
                        target="_blank"
                      >
                        <img
                          src="./assets/images/play_btn.png"
                          alt="play_btn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="project_third_box project_3">
                    <img
                      src={projectDetails5}
                      alt="project_detail_5"
                    />
                    <div class="project_box_hover">
                      <Link
                        class="popup-youtube"
                        href="https://www.youtube.com/watch?v=bY-mOdgz7zQ"
                        target="_blank"
                      >
                        <img
                         src={play}
                          alt="play_btn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsComponent;
