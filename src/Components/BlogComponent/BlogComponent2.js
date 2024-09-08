import React from "react";
import "./BlogComponent.css";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

const BlogComponent2 = () => {
  return (
    <section class="read_ur_latest_blox_wrapper">
      <div class="container">
        <div class="row">
        {BlogData.slice(0, 3).map((e, i) => (
            <div class="col-lg-4" key={i}>
              <Link to={`/Home/Our_Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
              <div class="troo_da_hand_we_r_done_box">
                <div class="troo_da_hand_we_r_done_box_inner">
                  <div class="troo_da_hand_we_r_done_box_img">
                    <img src={e.img} alt="lastest_blog_1" />
                  </div>
                  <div class="troo_da_hand_we_r_done_box_hover_detail">
                    <h3>{e.name} </h3>
                    <p>{e.para}</p>
                    <div class="readmore">
                      <p>{e.btn} </p>
                    </div>
                  </div>
                  <div class="troo_da_hand_we_r_done_box_title">
                    <h3>{e.name} </h3>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
         
        </div>
        <div class="row">
        {BlogData.slice(3,6).map((e, i) => (
            <div class="col-lg-4" key={i}>
              <Link to={`/Home/Our_Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
              <div class="troo_da_hand_we_r_done_box">
                <div class="troo_da_hand_we_r_done_box_inner">
                  <div class="troo_da_hand_we_r_done_box_img">
                    <img src={e.img} alt="lastest_blog_1" />
                  </div>
                  <div class="troo_da_hand_we_r_done_box_hover_detail">
                    <h3>{e.name} </h3>
                    <p>{e.para}</p>
                    <div class="readmore">
                      <p>{e.btn} </p>
                    </div>
                  </div>
                  <div class="troo_da_hand_we_r_done_box_title">
                    <h3>{e.name} </h3>
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

export default BlogComponent2;
