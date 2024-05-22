// ContactUs.js
import React from 'react';
import './contact.css'
function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-info">
          <p className="contact-text"><span className="contact-label">Email:</span> example@example.com</p>
          <p className="contact-text"><span className="contact-label">Contact Number:</span> +1234567890</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
