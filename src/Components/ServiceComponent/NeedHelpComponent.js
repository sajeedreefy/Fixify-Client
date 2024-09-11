import React from 'react';
import "./ServiceDetails.css";

const NeedHelp = () => {
  return (
    <div className="need_any_help_box">
      <div className="footer_title">
        <h4>Need Any Help?</h4>
      </div>
      <div className="footer_call_detail">
        <p>Call us</p>
      </div>
      <div className="footer_call">
        <a href="tel:+44 123 456 7065">+44 123 456 7065</a>
      </div>
      <div className="footer_mail_detail">
        <p>Email us</p>
      </div>
      <div className="footer_call">
        <a href="mailto:troohanyman@email.com">troohanyman@email.com</a>
      </div>
      <div className="need_any_help_conct_btn">
        <button type="button" className="btn btn-primary">
          Contact with Us
        </button>
      </div>
    </div>
  );
};

export default NeedHelp;
