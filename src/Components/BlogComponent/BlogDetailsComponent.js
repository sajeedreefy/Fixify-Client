import React from "react";
import "./BlogDetails.css";
import blogDetailsImg from "../../images/Blog_detail_img.png";
import blogDetilsIMg2 from "../../images/Blog_detail_img-2.png";

const BlogDetailsComponent = () => {
  return (
    <section class="Blog_detail_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog_top_detail">
              <p>
                By Admin, Published On: 21 August, 2022, Categories: Plumbing,
                Handyman, Pipe
              </p>
            </div>
            <div class="blog_detail_title">
              <h2>When have a problem with cracked pipes</h2>
              <img src={blogDetailsImg} alt="blog" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5">
            <div class="blog_detail_img">
              <img src={blogDetilsIMg2} alt="Blog" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="blog_detail_right_content">
              <p>
                Lorem Ipsum is simply dummy text of the and is printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type lorem scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into lorem electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheetscontaining Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the and is printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blog_detail_cont">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blog_detail_benifits_title">
              <h4>Benefits</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="blog_detail_benifits_outer">
              <ul class="blog_detail_benifits_ul">
                <li>An affordable pricing plan</li>
                <li>All type repairs and maintence</li>
                <li>Commercial & Industrial Services</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog_detail_benifits_outer">
              <ul class="blog_detail_benifits_ul">
                <li>We have morden technology to do work</li>
                <li>Work finish before deadline</li>
                <li>We provide 24X7 emergency services</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog_detail_benifits_outer">
              <ul class="blog_detail_benifits_ul">
                <li>We have morden technology to do work</li>
                <li>Work finish before deadline</li>
                <li>We provide 24X7 emergency services</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blog_detail_bottom_cont">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blog_detail_social_icon">
              <div class="troo_da_top_header_social_icon">
                <div class="troo_da_top_header_inner d-flex">
                  <span>Share on:</span>
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
              <h3>0 Comments</h3>
              <p>Submit a Comment</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blog_detail_form">
              <form>
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    placeholder="Full Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Edress"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Website"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Write a message....."
                  ></textarea>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Save my name, email, and website in this browser for the
                    next time i comment.
                  </label>
                </div>
                <div class="form_submit">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsComponent;
