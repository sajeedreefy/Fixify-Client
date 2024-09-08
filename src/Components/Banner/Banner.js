import React from 'react'
import title from "../../images/title_img.png"
import heroImg from "../../images/hero_img.png"
import "./Banner.css"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section class="troo_da_hero_wrapper">
        <div class="hero_overLay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="troo_da_hero_left_side">
                        <div class="troo_da_hero_small_outer d-flex">
                            <div class="troo_da_small_title_img zoom-in-zoom-out">
                                <img src={title} alt="title_img" />
                            </div>
                            <div class="troo_da_hero_left_small_title">
                                <h4>Quality handyman services</h4>
                            </div>
                        </div>
                        <div class="troo_da_hero_title">
                            <h1>One call can solve your
                                <span>House Problem</span>
                            </h1>
                        </div>
                        <div class="troo_da_hero_content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's & standard dummy text ever since the 1500s, when an unknown
                                printer took and galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries,</p>
                        </div>
                        <div class="troo_da_hero_btn">
                            <Link to="/Home/Services_Lists"><button type="button" class="btn btn-primary">See Our Services</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 hero_right">
                    <div class="troo_da_hero_img">
                        <img src={heroImg} alt="hero_img" />
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Banner