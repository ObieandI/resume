import React from 'react';
import './Contact.css';  // Import the CSS file for styling

function Contact() {
  return (
    <div className="contact-container">
      <h2 className='py-3'>Get In Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </div>
  );
}

export default Contact;
