import React from "react";
import './projectpage.css'

const projectList = [
  {
    name: "National Aquatic Championship 2025 – Website",
    description: `The official online platform for India's premier national-level swimming contest, designed to deliver a seamless and informative experience for athletes, coaches, and fans. The website features a visually engaging homepage with event highlights, a dynamic event schedule, and real-time updates. Users can easily register online, access downloadable resources like the rulebook and schedule, and explore detailed venue information with interactive maps and photo galleries. The site is fully responsive, ensuring smooth navigation on any device, and integrates social media feeds for live event coverage. With clear call-to-action buttons and a dedicated support section, the platform makes participation and information access effortless for everyone involved.`,
    venue: "KRS Backwaters, Mysore",
    date: "Mid-August 2025 (Exact dates to be announced)",
  },
  {
    name: "Swimming Pool Access Management Website",
    description:
      "A modern web-based ticketing and attendance system for swimming pools, replacing physical tickets with a digital QR code solution. Users can purchase passes, receive dynamic QR codes, and have their attendance verified by pool staff via QR scanning—all through an easy-to-use website.",
    features: [
      "Eliminate Physical Tickets: Digital QR code system for pool access, managed via the website.",
      "Flexible Payment Plans: Daily, monthly, and yearly subscriptions with secure online payments.",
      "User-Friendly Interface: Intuitive web dashboard for users and staff to manage access and attendance.",
      "Scalability: Designed to handle multiple users and pools across locations.",
      "Security: Secure payment processing and user data protection.",
    ],
  },
];

const Projectpage = () => {
  return (
    <div className="project-page">
  <div className="page-headers">
    <h1 className="page-title">PROJECTS</h1>
  </div>

  <div className="upcoming-title">Upcoming Projects</div>
<div className="project-list-card">
  <div className="project-list">
    {projectList.map((project, idx) => (
      <div key={idx} className="project-card">
        <h2 className="project-title">{`${idx + 1}. ${project.name}`}</h2>

        {project.venue && (
          <p className="project-meta">
            Venue: <span>{project.venue}</span>
          </p>
        )}

        {project.date && (
          <p className="project-meta">
            Date: <span>{project.date}</span>
          </p>
        )}

        <p className="project-description">{project.description}</p>

        {project.features && (
          <ol className="project-features">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ol>
        )}
      </div>
    ))}
  </div></div>
</div>

  );
};

export default Projectpage;
