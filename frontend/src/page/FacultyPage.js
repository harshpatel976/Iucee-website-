import React from 'react';
import './style.css';

const facultyMembers = [
  {
    name: 'Dr. A. P. Advisor',
    role: 'Strategic Advisor',
    photo: process.env.PUBLIC_URL + '/Coremember/Abhishek.webp',
  },
  {
    name: 'Prof. S. P. Spoc',
    role: 'SPOC',
    photo: process.env.PUBLIC_URL + '/Coremember/Anagha.webp',
  },
  {
    name: 'Dr. F. C. One',
    role: 'Faculty Coordinator',
    photo: process.env.PUBLIC_URL + '/Coremember/Ananya.webp',
  },
  {
    name: 'Dr. F. C. Two',
    role: 'Faculty Coordinator',
    photo: process.env.PUBLIC_URL + '/Coremember/Aneesh.webp',
  },
  // Add more as needed
];

const roles = ['Strategic Advisor', 'SPOC', 'Faculty Coordinator'];

const FacultyCard = ({ name, photo }) => (
  <div className="faculty-card">
    <img src={photo} alt={name} className="faculty-image" />
    <div className="faculty-info-overlay">
      <h3>{name}</h3>
    </div>
  </div>
);

const FacultyPage = () => {
  return (
    <div className="faculty-members-page">
      <div className="page-headers">
        <h1 className="page-title">FACULTY</h1>
      </div>
      {roles.map((role) => (
        <div key={role} className="faculty-section">
          <h2 className="faculty-category-title">{role}</h2>
          <div className="faculty-grid">
            {facultyMembers
              .filter((member) => member.role === role)
              .map((member) => (
                <FacultyCard key={member.name} name={member.name} photo={member.photo} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyPage; 