import React from "react";
import "./Footer.css"; // Assuming you'll add styles here

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2024 by Ambra Vladone</p>
          <p>
            Created using React & Bootstrap.
          </p>
        </div>

        <div className="footer-right">
          <div className="contact-section">
            <p><strong>Call</strong></p>
            <p>0478 649 906</p>
          </div>

          <div className="contact-section">
            <p><strong>Write</strong></p>
            <p><a href="mailto:ambradvladone@gmail.com">ambradvladone@gmail.com</a></p>
          </div>

          <div className="contact-section">
            <p><strong>Follow</strong></p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ambra-vladone-bb9b91133/"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;