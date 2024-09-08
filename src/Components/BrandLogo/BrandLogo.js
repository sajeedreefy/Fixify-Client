import React from 'react'
import "./BrandLogo.css"
import brandLogo1 from "../../images/brand_Logo_1.png"
import brandLogo2 from "../../images/brand_Logo_2.png"
import brandLogo3 from "../../images/brand_Logo_3.png"
import brandLogo4 from "../../images/brand_Logo_4.png"
import brandLogo5 from "../../images/brand_Logo_5.png"
import brandLogo6 from "../../images/brand_Logo_6.png"



const BrandLogo = () => {
  return (
    <section class="brand_logo_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">

                    <div class="brand_logo_outer d-flex">
                        <div class="item">
                            <div class="brand_logo">
                                <img src={brandLogo1} alt="brand_Logo_1" />
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src={brandLogo2} alt="brand_Logo_2"/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src={brandLogo3} alt="brand_Logo_3" />
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src={brandLogo4} alt="brand_Logo_4" />
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src={brandLogo5} alt="brand_Logo_5" />
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src={brandLogo6} alt="brand_Logo_6" />
                            </div>
                        </div>
                        {/* <div class="item">
                            <div class="brand_logo">
                                <img src="./assets/images/brand_Logo_1.png" alt="brand_Logo_1"/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src="./assets/images/brand_Logo_2.png" alt="brand_Logo_2"/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src="./assets/images/brand_Logo_3.png" alt="brand_Logo_3"/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src="./assets/images/brand_Logo_4.png" alt="brand_Logo_4"/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src="./assets/images/brand_Logo_5.png" alt="brand_Logo_5"/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="brand_logo">
                                <img src="./assets/images/brand_Logo_6.png" alt="brand_Logo_6"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BrandLogo