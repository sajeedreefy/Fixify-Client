import React, { useEffect, useState } from "react";
import "./ServiceDetails.css";
import ApiFacade from '../../api/facade';
import { Link } from "react-router-dom";
import { ShimmerTitle } from 'react-shimmer-effects';



const NeedHelp = ({ serviceId }) => {

  const [preferenceItems, setPreferenceItems] = useState(null);

  useEffect(() => {
    const loadPreference = async () => {
      try {
        const data = await ApiFacade.fetchPreferenceData();
        setPreferenceItems(data);
      } catch (error) {
        console.error("Error loading preference data:", error);
      }
    };

    loadPreference();
  }, []);

  return (
    <div className="need_any_help_box">
      <div className="footer_title">
        <h4>Need Any Help?</h4>
      </div>
      <div className="footer_call_detail">
        <p>Call us</p>
      </div>
      <div className="footer_call">
        {preferenceItems ? (
          <>
            {preferenceItems?.phone_numbers.slice(0, 1).map((num, i) => (
              <a key={i} href={`tel:${num.phone}`}>{num.phone}</a>

            ))}
          </>
        ) : (
          <ShimmerTitle line={1} gap={5} />
        )}

      </div>
      <div className="footer_mail_detail">
        <p>Email us</p>
      </div>
      <div className="footer_call">
        {preferenceItems ? (
          <>
            {preferenceItems?.email_addresses.slice(0, 1).map((mail, i) => (
              <a key={i} href={`mailto:${mail.email}`}>{mail.email}</a>
            ))}
          </>
        ) : (
          <ShimmerTitle line={1} gap={5} />
        )}
      </div>
      <Link
        to={`/Home/Quote_Request?s_id=${serviceId}`}
      >
        <div className="need_any_help_conct_btn">
          <button type="button" className="btn btn-primary">
            Get Service
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NeedHelp;
