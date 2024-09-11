import React, { useEffect, useState } from 'react'
import "./PricingcardComponent.css"
import title from "../../images/title_img.png"
import { Link } from 'react-router-dom'
import { fetchPricingPlanData } from '../../api/pricing_plan/pricingPlanAPI'


const PricingcardComponent = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        const loadPricingPlanData = async()=>{
            try {
               const data = await fetchPricingPlanData();
               setData(data);
            } catch (error) {
                console.error("Pricing Plan Data Fetching Error: ", error)
            }
        }
    
        loadPricingPlanData();
    },[])

  return (
    <section class="troo_da_pricing_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="priciing_title_outer">
                        <div class="troo_da_hero_small_outer about d-flex">
                            <div class="troo_da_small_title_img zoom-in-zoom-out">
                                <img src={title} alt="title_img"/>
                            </div>
                            <div class="troo_da_hero_left_small_title">
                                <h4>{data?.section_data.section_title}</h4>
                            </div>
                        </div>
                        <div class="troo_da_about_hero_handyman_title">
                            <h2>{data?.section_data.title}</h2>
                        </div>
                    </div>

                </div>
                <div class="col-lg-4">
                    <div class="pricing_title_content">
                        <p>{data?.section_data.subtitle}</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="troo_da_about_we_r_done_btn text-end">
                        <Link to="/">
                        <button type="button" class="btn btn-primary">See All Plans</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="row">
                {data && data.plan_data.map((each,index)=>(
                    <div key={index} class="col-lg-4">
                        <div class="pricing_box">
                            <div class="pricing_inner">
                                <div class="pricing_title">
                                    <h3>{each.plan_title}</h3>
                                    <p>{each.plan_subtitle}</p>
                                </div>
                                <div class="pricing_tag_outer d-flex align-items-center">
                                    <h4>$</h4>
                                    <p>{each.plan_price}</p><span class="price_month">/ per {each.plan_per}</span>
                                </div>
                                <div class="pricing_list">
                                    <ul class="pricing_list_ul">
                                        {each.plan_features.map((feature,index)=>(
                                            <li key={index}>{feature.feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div class="pricing_btn">
                                    <button type="button" class="btn btn-primary">Get started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PricingcardComponent