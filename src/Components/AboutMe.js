import React from "react";
import "./AboutMe.css"; // Assuming you'll add styles here
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
            <button className="resume-btn">Resume</button>
            <button className="projects-btn">Projects</button>
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
        <Col md={12}>
          <h2>Education</h2>

          <div className="education-card">
            <h3>2023</h3>
            <p>Bachelor of Game Design & Development</p>
            <p>Macquarie University, Sydney, Australia</p>
          </div>

          <div className="education-card">
            <h3>2025 (Expected)</h3>
            <p>Postgraduate Certificate in Web Development</p>
            <p>
              Queensland University of Technology (QUT), Brisbane, Australia
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
