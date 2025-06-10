import React from 'react'
import './homepage.css'

const Section1Mission = () => {
  return (
    <div className="container">
      {/* Left Sidebar with Vertical Text */}
      <div className="sidebar">
        <h1 className="vertical-text">MISSION & VISION</h1>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Vision Section */}
        <div className="section">
          <h2 className="section-title">VISION</h2>
          <p className="paragraph">
            ENABLE STUDENTS TO LEAD IMPACTFUL PROJECTS THAT ADDRESS REAL-WORLD CHALLENGES.
          </p>
          <p className="paragraph">
            REPRESENT NIE ON NATIONAL AND INTERNATIONAL STAGES THROUGH INNOVATION CONTESTS AND COLLABORATIVE INITIATIVES.
          </p>
          <p className="paragraph">
            BUILD A NETWORK OF CHANGEMAKERS AND INNOVATORS LEVERAGING IUCEE’S GLOBAL ECOSYSTEM.
          </p>
          <p className="paragraph">
            ESTABLISH OUR CHAPTER AS A CENTER OF EXCELLENCE FOR RESPONSIBLE, FORWARD-THINKING ENGINEERING.
          </p>
        </div>

        {/* Mission Section */}
        <div className="section">
          <h2 className="section-title">MISSION</h2>
          <p className="paragraph">
            PROVIDE HANDS-ON LEARNING OPPORTUNITIES THROUGH TECHNICAL WORKSHOPS, INNOVATION CHALLENGES, AND INTERDISCIPLINARY PROJECTS.
          </p>
          <p className="paragraph">
            INSPIRE CREATIVITY AND COLLABORATION VIA HACKATHONS, PROJECT-BASED LEARNING, AND ENGAGING SEMINARS.
          </p>
          <p className="paragraph">
            PARTNER WITH FACULTY, INDUSTRY PROFESSIONALS, AND GLOBAL IUCEE MENTORS TO BRIDGE ACADEMIC KNOWLEDGE WITH REAL-WORLD SKILLS.
          </p>
          <p className="paragraph">
            CULTIVATE A CULTURE OF PEER LEARNING, ETHICAL ENGINEERING, AND COMMUNITY-DRIVEN SOLUTIONS.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section1Mission