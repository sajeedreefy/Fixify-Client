import React, { useEffect, useState } from 'react'
import "./PricingcardComponent.css"
import title from "../../images/title_img.png"
import { Link } from 'react-router-dom'
import { fetchPricingPlanData } from '../../api/pricing_plan/pricingPlanAPI'
import { ShimmerTitle, ShimmerText, ShimmerButton } from 'react-shimmer-effects'
import ShimmerThreeCards from './ShimmerThreeCards'

const PricingcardComponent = () => {

    const [data, setData] = useState(null);
    const [loadData, setLoadData] = useState(true);

    useEffect(()=>{
        const loadPricingPlanData = async()=>{
            try {
               const data = await fetchPricingPlanData();
               setData(data);
            } catch (error) {
                console.error("Pricing Plan Data Fetching Error: ", error)
            } finally {
                setLoadData(false)
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
                        {loadData? 
                            <div style={{ marginBottom: '20px'}}>
                                <ShimmerTitle line={1} gap={10} />
                            </div>:
                            <div class="troo_da_hero_small_outer about d-flex">
                                <div class="troo_da_small_title_img zoom-in-zoom-out">
                                    <img src={title} alt="title_img"/>
                                </div>
                                <div class="troo_da_hero_left_small_title">
                                    <h4>{data?.section_data.section_title}</h4>
                                </div>
                            </div>
                        }
                        {loadData? 
                            <div style={{ marginBottom: '20px'}}>
                                <ShimmerTitle line={1} gap={10} />
                            </div>:
                            <div class="troo_da_about_hero_handyman_title">
                                <h2>{data?.section_data.title}</h2>
                            </div>
                        }
                    </div>

                </div>
                <div class="col-lg-4">
                    {loadData? 
                        <div style={{ marginBottom: '15px'}}>
                            <ShimmerText line={5} gap={10} />
                        </div>:
                        <div class="pricing_title_content">
                            <p>{data?.section_data.subtitle}</p>
                        </div>
                    }
                </div>
                <div class="col-lg-4">
                    {loadData?
                        <div style={{ padding: '20px', width:"100%", display:'flex', justifyContent:'end', alignItems:'center'}}>
                            <ShimmerButton size="lg"/>
                        </div>:
                        <div class="troo_da_about_we_r_done_btn text-end">
                            <Link to="/">
                            <button type="button" class="btn btn-primary">See All Plans</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <div class="row">
                {loadData? <ShimmerThreeCards/>:<>
                {data && data.plan_data.map((each,index)=>(
                    <div key={index} class="col-lg-4">
                        <div class={`pricing_box ${each.is_active?"hover_box":""}`}>
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
                </>}
            </div>
        </div>
    </section>
  )
}

export default PricingcardComponent;