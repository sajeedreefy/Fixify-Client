import React from "react";
import "./Error404Component.css";
import error from "../../images/error_404.png"

const Error404Component = () => {
  return (
    <section class="error_404_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="error404_outer">
              <div class="error404_img">
                <img src={error} alt="404" />
              </div>
              <div class="error404_title">
                <h2>Sorry! Page Not Found</h2>
                <h3>The page you are looking for was never existed.</h3>
              </div>
              <div class="troo_da_about_we_r_done_btn text-center">
                <button type="button" class="btn btn-primary">
                  Go to Homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404Component;
