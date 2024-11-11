import React from 'react';
import "./Contact.css"; // Importing the CSS file

function Contact() {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="container">
          <div className="text-center w-full contact-header">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">
              To avail my services and for any queries...
            </p>
          </div>
          <div className="form-container">
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                />
              </div>
              <div className="form-field full-width">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                />
              </div>
              <div className="submit-container">
                <button className="submit-btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
