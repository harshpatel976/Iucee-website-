import React, { useEffect, useRef } from 'react'
import './homepage.css'

const Section1Mission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" ref={sectionRef} id="mission-vision-section">
      {/* Left Sidebar with Vertical Text */}
      <div className="sidebar">
        <h1 className="vertical-text">VISION & MISSION</h1>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Vision Section */}
        <div className="section vision-section">
          <h2 className="section-title">VISION</h2>
          <div className="content-wrapper">
            <p className="paragraph">
              ENABLE STUDENTS TO LEAD IMPACTFUL PROJECTS THAT ADDRESS REAL-WORLD CHALLENGES.
            </p>
            <p className="paragraph">
              REPRESENT NIE ON NATIONAL AND INTERNATIONAL STAGES THROUGH INNOVATION CONTESTS AND COLLABORATIVE INITIATIVES.
            </p>
            <p className="paragraph">
              BUILD A NETWORK OF CHANGEMAKERS AND INNOVATORS LEVERAGING IUCEE'S GLOBAL ECOSYSTEM.
            </p>
            <p className="paragraph">
              ESTABLISH OUR CHAPTER AS A CENTER OF EXCELLENCE FOR RESPONSIBLE, FORWARD-THINKING ENGINEERING.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="section mission-section">
          <h2 className="section-title">MISSION</h2>
          <div className="content-wrapper">
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
    </div>
  )
}

export default Section1Mission