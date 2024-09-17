import React from "react";
import { Link } from "react-router-dom"; // Ensure you import Link for routing
import "./AboutMe.css"; // Your CSS styling file
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

function AboutMe() {
  return (
    <Container className="about-me-container">
      <Row>
        {/* Left Column - Profile Card */}
        <Col md={6} className="profile-card-container">
          <div className="profile-card">
            <img
              src="/profilePicture.jpg"
              alt="Profile"
              className="profile-image"
            />
            <h2>Ambra Daniela Vladone</h2>
            <p className="profile-title">Web Developer</p>
            <hr />
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ambra-vladone-bb9b91133/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </Col>

        {/* Right Column - About Me Section */}
        <Col md={6} className="about-text-container">
          <div className="about-text">
            <h1>Hello!</h1>
            {/* Make the buttons go to the proper routes */}
            <Link to="/resume" className="btn resume-btn">Resume</Link>
            <Link to="/projects" className="btn projects-btn">Projects</Link>
            <p>
              Hello! I’m a passionate Web Developer with a background in game
              design and development. With experience in both web and game
              development, I love creating visually engaging and technically
              sound solutions that enhance user experiences. Whether it's
              building responsive websites or developing interactive games, I
              bring creativity, strategic thinking, and attention to detail to
              everything I do.
            </p>
          </div>
        </Col>
      </Row>

      {/* Education Section in a separate Row */}
      <Row className="education-section">
        <h3 className="mb-3">Education</h3>

        {/* Macquarie University */}
        <Col md={6}>
          <div className="education-card">
            <div className="education-content">
              <img
                src="/macquarie.webp"
                alt="Macquarie University Logo"
                className="university-logo"
              />
              <div className="education-text">
                <h3>2023</h3>
                <p>Bachelor of Game Design & Development</p>
                <p>Macquarie University, Sydney, Australia</p>
              </div>
            </div>
          </div>
        </Col>

        {/* Queensland University of Technology (QUT) */}
        <Col md={6}>
          <div className="education-card">
            <div className="education-content">
              <img src="/qut.png" alt="QUT Logo" className="university-logo" />
              <div className="education-text">
                <h3>2025 (Expected)</h3>
                <p>Postgraduate Certificate in Web Development</p>
                <p>
                  Queensland University of Technology (QUT), Brisbane, Australia
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
