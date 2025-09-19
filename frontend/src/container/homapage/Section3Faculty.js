import React from 'react';
import './homepage.css';

const Section3Aim = () => {
  const faculty = [
    {
      name: "Dr. Likith Kumar M V",
      designation: "Associate Professor, Dept. of EEE",
      role:"Strategic Advisor",
      img: "/Faculty/Dr Likith.jpg",
    },
    {
      name: "Dr. Jayanth K",
      designation: "Assistant Professor, Dept. of Civil",
      role:"SPOC",
      img: "/Faculty/Dr Jayanth K.jpg",
    },
    
    {
      name: "Dr. Mayura Tapkire",
      designation: "Associate Professor, Dept. of CSE",
        role:"Faculty Coordinator",
      img: "/Faculty/Dr Mayura.jpg",
    },
    {
      name: "Dr. Rajeshwari D",
      designation: "Associate Professor, Dept. of ISE",
      role:"Faculty Coordinator",
      img: "/Faculty/Dr Rajeshwari.jpg",
    },
    {
      name: "Dr. Rajalekshmi Kishore",
      designation: "Associate Professor, Dept. of ECE",
      role:"Faculty Coordinator",
      img: "/Faculty/Dr Rajalekshmi.jpg",
    },
  ];

  return (
    <div className="stellarGrid" id="faculty-section">
  <h1 className="faculty-title">Guiding Faculty</h1>

  <div className="faculty-grid">
    {faculty.map((person, index) => (
      <div className="faculty-card" key={index}>
        <img src={person.img} alt={person.name} className="faculty-photo" />
        <div className="faculty-content">
          <h2 className="faculty-name">{person.name}</h2>
          <p className="faculty-designation">{person.designation}</p>
            <p className="faculty-role">{person.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Section3Aim;
