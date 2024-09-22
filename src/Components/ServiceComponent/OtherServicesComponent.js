import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceDetails.css";
import ApiFacade from '../../api/facade';
import { ShimmerTable } from 'react-shimmer-effects';


const OtherServices = () => {
    const [allServiceData, setAllServiceData] = useState(null);
    const [serviceLoading, setServiceLoading] = useState(true);


    useEffect(() => {
        const loadAllServiceData = async () => {
            try {
                const data = await ApiFacade.fetchAllServices();
                setAllServiceData(data);
            } catch (error) {
                console.error('Error loading services:', error);
            } finally {
                setServiceLoading(false);
            }
        };

        loadAllServiceData();
    }, []);

    return (
        <>
            {
                serviceLoading ? (
                    <>
                        <ShimmerTable row={5} col={2} />

                    </>
                ) : (
                    <>
                        <div className="service_box_wrapper_right_side">
                            <div className="other_box">
                                <div className="other_list">
                                    <div className="footer_title">
                                        <h4>Other Services</h4>
                                    </div>
                                    <ul className="other_list_ul">
                                        {allServiceData?.map((service, index) => (

                                            <Link
                                                to={`/Home/Our_Services/Service_Details?id=${service.name}`}
                                                style={{ color: '#212529', textDecoration: 'none' }}
                                            >      <li key={index} >{service.name}</li>
                                            </Link>


                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </>
    );
};

export default OtherServices;
