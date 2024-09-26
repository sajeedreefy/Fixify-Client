import React, { useState, useEffect } from "react";
import "./BlogDetails.css";
import { useLocation } from "react-router-dom";
import { fetchSingleBlogPostData } from "../../api/BlogSection/blogSectionAPI";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ShimmerTitle, ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";
import { Badge } from "react-bootstrap";  // Import Badge from react-bootstrap

const BlogDetailsComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blog_postName = queryParams.get("name");
  const [singleData, setSingleData] = useState(null);
  const [blogDetailsLoad, setBlogDetailsLoad] = useState(true);

  useEffect(() => {
    const loadBlogPostData = async () => {
      try {
        const data = await fetchSingleBlogPostData(blog_postName);
        setSingleData(data);
      } catch (error) {
        console.error("Blog Post Data Fetching Error: ", error);
      } finally {
        setBlogDetailsLoad(false);
      }
    };
    loadBlogPostData();
  }, [blog_postName]);

  useEffect(() => {
    document.title = singleData?.title;
  }, [singleData]);

  // Helper function to capitalize the first letter of each word
  const capitalizeWords = (text) => {
    return text
      ?.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Social share function
  const shareOnSocialMedia = (platform) => {
    const blogUrl = `${window.location.origin}/blogs/${singleData?.route}`;
    const blogTitle = singleData?.title;

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`,
        "_blank"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(blogTitle)}`,
        "_blank"
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}&title=${encodeURIComponent(blogTitle)}`,
        "_blank"
      );
    }
  };

  return (
    <section className="Blog_detail_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {blogDetailsLoad ? (
              <ShimmerTitle line={2} gap={10} />
            ) : (
              <div className="blog_top_detail">
                <p>
                  By {singleData?.blogger}, Published On: {singleData?.published_on}, 
                  <Badge pill bg="secondary" className="mx-2">
                    {capitalizeWords(singleData?.blog_category)}
                  </Badge>
                </p>
              </div>
            )}
            <div className="blog_detail_title">
              {blogDetailsLoad ? (
                <>
                  <ShimmerText line={5} gap={10} />
                  <ShimmerText line={4} gap={10} />
                  <ShimmerText line={6} gap={10} />
                </>
              ) : (
                <h3 style={{ marginTop: "18px" }}>{singleData?.blog_intro}</h3>
              )}
              {blogDetailsLoad ? (
                <ShimmerThumbnail height={500} />
              ) : (
                <img
                  src={`${process.env.REACT_APP_BASE_URL}${singleData?.meta_image}`}
                  alt="blog"
                />
              )}
              <p>{singleData?.meta_description}</p>
              <p dangerouslySetInnerHTML={{ __html: singleData?.content }}></p>
            </div>
          </div>
        </div>
        {singleData?.custom_benefits.length !== 0 && (
          <>
            <div className="row">
              <div className="col-lg-12">
                <div className="blog_detail_benifits_title">
                  <h4>Benefits</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="blog_detail_benifits_outer">
                  <ul className="blog_detail_benifits_ul">
                    {singleData?.custom_benefits.slice(0, 3).map((each, index) => (
                      <li key={index}>{each.benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_detail_benifits_outer">
                  <ul className="blog_detail_benifits_ul">
                    {singleData?.custom_benefits.slice(3, 6).map((each, index) => (
                      <li key={index}>{each.benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_detail_benifits_outer">
                  <ul className="blog_detail_benifits_ul">
                    {singleData?.custom_benefits.slice(6).map((each, index) => (
                      <li key={index}>{each.benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="row">
          <div className="col-lg-12">
            <div className="blog_detail_social_icon">
              <div className="troo_da_top_header_social_icon">
                <div className="troo_da_top_header_inner d-flex">
                  <span>Share on:</span>
                  <ul className="top_header_list d-flex">
                    <li style={{ marginRight: "5px" }}>
                      <button
                        style={{ border: "none", backgroundColor: "#fcecd7" }}
                        onClick={() => shareOnSocialMedia("facebook")}
                      >
                        <FaFacebookF />
                      </button>
                    </li>
                    <li style={{ marginRight: "5px" }}>
                      <button
                        style={{ border: "none", backgroundColor: "#fcecd7" }}
                        onClick={() => shareOnSocialMedia("twitter")}
                      >
                        <FaTwitter />
                      </button>
                    </li>
                    <li style={{ marginRight: "5px" }}>
                      <button
                        style={{ border: "none", backgroundColor: "#fcecd7" }}
                        onClick={() => shareOnSocialMedia("linkedin")}
                      >
                        <FaLinkedinIn />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsComponent;
