import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Header.css"; // Assuming you'll add styles here

function Header() {
  return (
    <header className="sticky-header">
      <div className="container d-flex justify-content-between space-between">
        <div className="logo d-flex align-items-center">
          <div className="logo-icon" />
          <h1 className="logo-text">Ambra Vladone</h1>
          <span className="job-title"> / SOFTWARE DEVELOPER </span>
        </div>
        <nav className="nav">
          {/* Use Link from react-router-dom for navigation */}
          <Link to="/about">ABOUT ME</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
