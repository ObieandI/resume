import React from "react";
import "./Header.css"; // Assuming you'll add styles here

function Header() {
  return (
    <header className="sticky-header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo d-flex align-items-center">
          <div className="logo-icon" />
          <h1 className="logo-text">Ambra Vladone</h1>
          <span className="job-title"> / WEB DEVELOPER </span>
        </div>
        <nav className="nav">
          <a href="/about">ABOUT ME</a>
          <a href="/resume">RESUME</a>
          <a href="/projects">PROJECTS</a>
          <a href="/contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
