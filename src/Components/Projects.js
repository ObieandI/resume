import React from "react";
import "./Projects.css"; // Assuming we will create a CSS file for styling

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-card">
        <div className="project-info">
          <h2>E-Commerce Website</h2>
          <h4>Major Project</h4>
          <p>
            For this assignment, I designed a website for BaeShore, a swimwear
            brand, focusing on creating a visually appealing and user-friendly
            interface. The project includes an "About Us" section that
            highlights the brand's history and commitment to quality and
            sustainability, accompanied by clean design elements such as brand
            imagery and custom typography. The goal was to capture the essence
            of the beach lifestyle while implementing responsive design,
            effective layout techniques, and attention to visual consistency
            across different sections.
          </p>
          <p>
            Achievements: Successfully completed the assignment with exceptional
            feedback for design consistency and user experience execution.
            Received 100% for this assignment.
          </p>
        </div>
        <div className="project-image">
          <img
            src={`${process.env.PUBLIC_URL}/projectOne.png`}
            alt="Project Visual"
          />
        </div>
      </div>

      <div className="project-card">
        <div className="project-info">
          <h2>Research Website</h2>
          <h4>Major Project</h4>
          <p>
            This major project involved creating an informative website
            focused on a specific research topic, using HTML, CSS, and
            JavaScript. The goal was to design a visually appealing and
            user-friendly site that presented complex information clearly. The
            topic explored infamous serial killers, providing detailed analysis
            and engaging storytelling throughout the website.
          </p>
          <p>
            Achievements: Received a High Distinction (HD) for the assignment,
            with commendations for the clear presentation of research, user
            experience, and overall website design.
          </p>
        </div>
        <div className="project-image">
          <img
            src={`${process.env.PUBLIC_URL}/projectTwo.png`}
            alt="Project Visual"
          />
        </div>
      </div>

      <div className="project-card">
        <div className="project-info">
          <h2>Interactive Website</h2>
          <h4>Major Project</h4>
          <p>
            The aim of this major project was to create an interactive
            storytelling website. I created this through a video game where
            outcomes are based on player interactions.
          </p>
          <p>
            Achievement: Successfully designed and developed an interactive
            storytelling website using game development techniques where user
            choices directly influenced the storyline's outcomes. This project
            demonstrated my ability to integrate player interactions into a
            dynamic narrative experience, showcasing both my creativity and
            technical skills in game design.
          </p>
        </div>
        <div className="project-image">
          <img
            src={`${process.env.PUBLIC_URL}/projectThree.png`}
            alt="Project Visual"
          />
        </div>
      </div>

      <div className="project-card">
        <div className="project-info">
          <h2>Wireframes</h2>
          <h4>Major Project</h4>
          <p>
            This project was in collaboration with a Macquarie University
            sponsor “Be Center''. They are a non for profit organization and our
            job was to create wireframes which would help redesign their current
            website and make it easier for their donors and sponsors to use. The
            wireframes were created using FIGMA.
          </p>
          <p>
            Achievements: Successfully collaborated with a real-world client,
            delivering professional wireframes that received positive feedback
            for their usability and clear, user-centered design approach.
            Completed the project using Figma and demonstrated strong
            wireframing and UX/UI design skills.
          </p>
        </div>
        <div className="project-image">
          <img
            src={`${process.env.PUBLIC_URL}/projectFour.png`}
            alt="Project Visual"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
