import React from "react";
import "./Resume.css"; // Link to your custom CSS for styling

function Resume() {
  return  (
    <div className="resume-container">
      <div className="resume-header">
        <h1>Resume</h1>
        <a href="/AmbraVladoneResume.pdf" download className="download-cv-btn">
          Download CV
        </a>
      </div>

      <div className="experience-section">
        <h2>Development Experience</h2>

        {/* Graduate Developer - NTI Limited */}
        <div className="experience-card">
          <div className="experience-info">
            <h3>March 2024 - June 2024</h3>
            <p>Graduate Developer</p>
            <p>NTI Limited</p>
            <p>Brisbane, Australia</p>
          </div>
          <div className="experience-description">
            <p>
              Collaborated with the Claims product team to develop a new
              insurance application aimed at streamlining the processing of
              claims.
              Created solutions using Angular, TypeScript, and Java. Followed
              Agile practices and conducted testing to ensure quality.
            </p>
          </div>
          <div className="experience-achievements">
            <h4>Achievements</h4>
            <p>
              Successfully delivered multiple bug fixes and UI/UX improvements,
              enhancing user experience.
            </p>
            <p>
              Received positive feedback from peers for the smooth
              functionality of the new insurance application.
            </p>
          </div>
        </div>

        {/* Website Developer - Macquarie University (October 2022 - December 2022) */}
        <div className="experience-card">
          <div className="experience-info">
            <h3>October 2022 - December 2022</h3>
            <p>Website Developer</p>
            <p>Macquarie University</p>
            <p>Sydney, Australia</p>
          </div>
          <div className="experience-description">
            <p>
              Prepared a project proposal for an interactive game website, including story, design, flow chart, artworks showcasing the project's UI, and a breakdown of the website's interactivity and technical implementations.
              Created website wireframes and art using Adobe Photoshop.
              Increased website interactivity by 100% using JavaScript and JSON to create events for each mouse click interaction.
            </p>
          </div>
          <div className="experience-achievements">
            <h4>Achievements</h4>
            <p>Received a High Distinction (HD) for outstanding design and development of the interactive website.</p>
          </div>
        </div>

        {/* Website Developer - Be Centre (April 2022 - July 2022) */}
        <div className="experience-card">
          <div className="experience-info">
            <h3>April 2022 - July 2022</h3>
            <p>Website Developer</p>
            <p>Be Centre</p>
            <p>Sydney, Australia</p>
          </div>
          <div className="experience-description">
            <p>
              Created 23 wireframes ensuring easy access to content through appropriate navigation bar development.
              Reduced menu options from 9 to 7 by removing outdated and redundant information.
              Liaised with clients and team members weekly to deliver progress reports and updates.
              Delivered a 168-page handover including project scope, risk management, resource management, and schedule documentation.
            </p>
          </div>
          <div className="experience-achievements">
            <h4>Achievements</h4>
            <p>Received a final grade of 82.5% for all deliverables.</p>
          </div>
        </div>

        {/* Website Developer - Macquarie University (November 2021 - December 2021) */}
        <div className="experience-card">
          <div className="experience-info">
            <h3>November 2021 - December 2021</h3>
            <p>Website Developer</p>
            <p>Macquarie University</p>
            <p>Sydney, Australia</p>
          </div>
          <div className="experience-description">
            <p>Designed an interactive informative website for a major project.
              Liaised with teachers to confirm website requirements on a weekly basis.
              Performed internal and external testing with five testers throughout feature implementation.
            </p>
          </div>
          <div className="experience-achievements">
            <h4>Achievements</h4>
            <p>Received a High Distinction (85+) for the completed assignment.</p>
          </div>
        </div>

        <h2>Work Experience</h2>

        {/* Assistant Manager & Store Manager - Elka Collective */}
        <div className="experience-card">
          <div className="experience-info">
            <h3>September 2023 - March 2024</h3>
            <p>Assistant Manager & Store Manager</p>
            <p>Elka Collective - David Jones QP</p>
            <p>Brisbane, Australia</p>
          </div>
          <div className="experience-description">
            <p>
              Managed stock levels, visual merchandising, and customer service.
              Promoted to Store Manager within the first year.
              Analyzed sales data and trained staff to meet sales targets.
              Received offer for promotion to a flagship store.
            </p>
          </div>
          <div className="experience-achievements">
            <h4>Achievements</h4>
            <p>
              Promoted to Store Manager of Elka Collective at David Jones Queen
              Plaza.
            </p>
            <p>
              Received an offer to manage the flagship boutique in Fortitude
              Valley.
            </p>
          </div>
        </div>

        {/* Store Manager - Review Australia */}
        <div className="experience-card">
          <div className="experience-info">
            <h3>April 2022 - September 2023</h3>
            <p>Store Manager</p>
            <p>Review Australia - Myer Chatswood</p>
            <p>SYD & BNE, Australia</p>
          </div>
          <div className="experience-description">
            <p>
              Managed daily operations, trained staff, and achieved sales
              targets. Analyzed customer trends and worked closely with the
              regional manager on store strategy.
            </p>
          </div>
          <div className="experience-achievements">
            <h4>Achievements</h4>
            <p>
              Promoted to Store Manager after just one month with the company.
            </p>
            <p>
              Successfully recruited and sourced the right candidates for
              various roles through effective interviews.
            </p>
            <p>
              Collaborated with regional managers on merchandising strategies to
              increase weekly sales.
            </p>
          </div>
        </div>

        {/* Checkout Supervisor - IGA Supamart */}
        <div className="experience-card">
          <div className="experience-info">
            <h3>February 2020 - April 2022</h3>
            <p>Checkout Supervisor</p>
            <p>IGA Supamart</p>
            <p>Sydney, Australia</p>
          </div>
          <div className="experience-description">
            <p>
              Supervised staff, resolved customer issues, and maintained
              productivity. Received promotion offers for managerial roles at
              multiple locations.
            </p>
          </div>
          <div className="experience-achievements">
            <h4>Achievements</h4>
            <p>
              Trained new staff to ensure excellent customer service standards
              were met.
            </p>
            <p>
              Received multiple promotion offers for managerial positions in two
              separate stores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
