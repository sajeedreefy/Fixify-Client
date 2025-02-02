import React, { useEffect, useState } from "react";
import "./BlogComponent.css";
import { Link, createSearchParams } from "react-router-dom";
import { fetchBlogPostData } from "../../api/BlogSection/blogSectionAPI";
import {ShimmerSimpleGallery} from "react-shimmer-effects";

const BlogComponent2 = () => {
  
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogList, setBlogList] = useState(null);
  
  useEffect(()=>{
    const loadBlogPostData = async()=>{
      try {
        const data = await fetchBlogPostData();
        setBlogList(data)
      } catch (error) {
        console.error("Blog Post Data Fetching Error: ", error);
      } finally{
        setBlogLoading(false)
      }
    }

    loadBlogPostData();
  },[])

  return (
    <section class="read_ur_latest_blox_wrapper">
      <div class="container">
        <div class="row">
          {blogLoading? 
          <ShimmerSimpleGallery card imageHeight={400} caption />:
          <>
          {blogList && blogList.slice(0, 3).map((e, i) => (
              <div class="col-lg-4" key={i}>
                <Link to={`/Home/Our_Blogs/Blog_Details?${createSearchParams({id : e.idx, name: e.name})}`}>
                <div class="troo_da_hand_we_r_done_box">
                  <div class="troo_da_hand_we_r_done_box_inner">
                    <div class="troo_da_hand_we_r_done_box_img">
                      <img src={`${process.env.REACT_APP_BASE_URL}${e.meta_image}`} alt="lastest_blog" />
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
          </>
          }
        </div>
        <div class="row">
         {blogList && blogList.slice(3,6).map((e, i) => (
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

export default BlogComponent2;
