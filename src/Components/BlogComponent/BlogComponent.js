import React, { useState, useEffect } from "react";
import "./BlogComponent.css";
import title from "../../images/title_img.png";
import { Link, createSearchParams } from "react-router-dom";
import { fetchBlogPostData } from "../../api/blog_section/blogSectionAPI";

const BlogComponent = () => {
  const [blogList, setBlogList] = useState(null);
  
  useEffect(()=>{
    const loadBlogPostData = async()=>{
      try {
        const data = await fetchBlogPostData();
        setBlogList(data)
       
      } catch (error) {
        console.error("Blog Post Data Fetching Error: ", error);
      }
    }

    loadBlogPostData();
  },[])


  return (
    <section class="read_ur_latest_blox_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="troo_da_hero_small_outer about d-flex">
              <div class="troo_da_small_title_img zoom-in-zoom-out">
                <img src={title} alt="title_img" />
              </div>
              <div class="troo_da_hero_left_small_title">
                <h4>Read our latest blogss</h4>
              </div>
            </div>
            <div class="troo_da_about_hero_handyman_title">
              <h2>We provide best plan for your needs</h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pricing_title_content">
              <p>
                Lorem Ipsum is simply dummy and is text of the printing and
                typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply
                dummy and is text of the printing and typesetting industry.
                Lorem Ipsum has been.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="troo_da_about_we_r_done_btn text-end">
              <Link to="/Home/Our_Blogs">
              <button type="button" class="btn btn-primary">
                See All Blogs
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
        {blogList?.slice(0, 3).map((e, i) => (
            <div class="col-lg-4" key={i}>
              <Link to={`/Home/Our_Blogs/Blog_Details?${createSearchParams({id : e.id, name:e.name})}`}>
              <div class="troo_da_hand_we_r_done_box">
                <div class="troo_da_hand_we_r_done_box_inner">
                  <div class="troo_da_hand_we_r_done_box_img">
                    <img src={`${process.env.REACT_APP_BASE_URL}${e.meta_image}`} alt="lastest_blog_1" />
                  </div>
                  <div class="troo_da_hand_we_r_done_box_hover_detail">
                    <h3>{e.title} </h3>
                    <p>{e.blog_intro}</p>
                    <div class="readmore">
                      <p>Continue More</p>
                    </div>
                  </div>
                  <div class="troo_da_hand_we_r_done_box_title">
                    <h3>{e.title} </h3>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
