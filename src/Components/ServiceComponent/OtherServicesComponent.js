import React from 'react';
import "./ServiceDetails.css";

const OtherServices = () => {
  const services = [
    "Painting Services",
    "Plumbing Services",
    "Home Renovation Services",
    "Electrical Services",
    "Carpenter Services",
  ];

  return (
    <div className="service_box_wrapper_right_side">
      <div className="other_box">
        <div className="other_list">
          <div className="footer_title">
            <h4>Other Services</h4>
          </div>
          <ul className="other_list_ul">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
