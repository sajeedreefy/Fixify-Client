import React, { useState, useEffect } from "react";
import "./BlogDetails.css";
import { useLocation } from "react-router-dom";
import { fetchSingleBlogPostData } from "../../api/blog_section/blogSectionAPI";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ShimmerTitle, ShimmerText, ShimmerThumbnail } from 'react-shimmer-effects';

// import { fetchingSingleBlogPostComment } from "../../api/blog_section/blogSectionAPI";

const BlogDetailsComponent = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blog_postName = queryParams.get('name');
  const [singleData, setSingleData] = useState(null);
  const [blogDetailsLoad, setBlogDetailsLoad] = useState(true);


  useEffect(()=>{
    const loadBlogPostData = async ()=> {
      try {
        const data = await fetchSingleBlogPostData(blog_postName);
        // const blogComment = await fetchingSingleBlogPostComment(blog_postName);
        setSingleData(data);
      } catch (error) {
        console.error("Blog Post Data Fetching Error: ", error);
      } finally {
        setBlogDetailsLoad(false);
      }
    }

    loadBlogPostData();
  },[blog_postName])

  useEffect(()=>{
    document.title = singleData?.title
  },[singleData])

  return (
    <section class="Blog_detail_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {blogDetailsLoad?<ShimmerTitle line={2} gap={10} />:
            <div class="blog_top_detail">
              <p>
                By {singleData?.blogger}, Published On: {singleData?.published_on}, Categories: {singleData?.blog_category},
              </p>
            </div>}
            <div class="blog_detail_title">
              {blogDetailsLoad?<ShimmerTitle line={2} gap={10}/>:
              <h2>{singleData?.title}</h2>}
              {blogDetailsLoad?<ShimmerThumbnail height={500}/>:
              <img src={`${process.env.REACT_APP_BASE_URL}${singleData?.meta_image}`} alt="blog" />}
              {blogDetailsLoad?
                <>
                  <ShimmerText line={5} gap={10} />
                  <ShimmerText line={4} gap={10} />
                  <ShimmerText line={6} gap={10} />
                </>:
                <h3 style={{"marginTop":"18px"}}>
                  {singleData?.blog_intro}
                </h3>
              }
              <p>
                {singleData?.meta_description}
              </p>
              <p dangerouslySetInnerHTML={{__html: singleData?.content}}></p>
            </div>
          </div>
        </div>
        {singleData?.custom_benefits.length!==0 && <>
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
                    {singleData?.custom_benefits.slice(0,3).map((each,index)=>(
                      <li key={index}>{each.benefit}</li>
                    ))}
                  </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="blog_detail_benifits_outer">
                  <ul class="blog_detail_benifits_ul">
                    {singleData?.custom_benefits.slice(3,6).map((each,index)=>(
                      <li key={index}>{each.benefit}</li>
                    ))}
                  </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="blog_detail_benifits_outer">
                  <ul class="blog_detail_benifits_ul">
                    {singleData?.custom_benefits.slice(6).map((each,index)=>(
                      <li key={index}>{each.benefit}</li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        </>}
        <div class="row">
          <div class="col-lg-12">
            <div class="blog_detail_social_icon">
              <div class="troo_da_top_header_social_icon">
                <div class="troo_da_top_header_inner d-flex">
                  <span>Share on:</span>
                  <ul class="top_header_list d-flex">
                    <li style={{"marginRight":"5px"}}>
                      <button style={{"border": "none", "backgroundColor": "#fcecd7"}}> <FaFacebookF /></button>  
                    </li>
                    <li style={{"marginRight":"5px"}}>
                      <button style={{"border": "none", "backgroundColor": "#fcecd7"}}><FaTwitter/></button>
                    </li>
                    <li style={{"marginRight":"5px"}}>
                      <button style={{"border": "none", "backgroundColor": "#fcecd7"}}><FaLinkedinIn/></button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <h3>0 Comments</h3> */}
              {/* <p>Submit a Comment</p> */}
            </div>
          </div>
        </div>
        {/* <div class="row">
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
        </div> */}
      </div>
    </section>
  );
};

export default BlogDetailsComponent;
