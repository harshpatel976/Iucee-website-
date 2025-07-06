import React from 'react';
import './CoreMembers.css';

const imageMap = {
  'Coremember/Hemanthcs.jpg': '/Coremember/Hemanthcs.jpg',
  'Coremember/Ananya.JPG': '/Coremember/Ananya.JPG',
  'Coremember/Sanket.jpeg': '/Coremember/Sanket.jpeg',
  'Coremember/Shashank.jpg': '/Coremember/Shashank.jpg',
  'Coremember/Sushmitha.jpg': '/Coremember/Sushmitha.jpg',
  'Coremember/Harsh.jpg': '/Coremember/Harsh.jpg',
  'Coremember/Pavan.jpg': '/Coremember/Pavan.jpg',
  'Coremember/Priti.jpg': '/Coremember/Priti.jpg',
  'Coremember/Pratham.jpg': '/Coremember/Pratham.jpg',
  
  'Coremember/Sindhoora.jpg': '/Coremember/Sindhoora.jpg',
  'Coremember/Shrusti.jpg': '/Coremember/Shrusti.jpg',
  'Coremember/Milan.jpg': '/Coremember/Milan.jpg',
  'Coremember/Dhanyashree.jpg': '/Coremember/Dhanyashree.jpg',
  'Coremember/Shreya.jpg': '/Coremember/Shreya.jpg',
  'Coremember/Pabitra.jpg': '/Coremember/Pabitra.jpg',
  'Coremember/Hrudhya.jpg': '/Coremember/Hrudhya.jpg',
  'Coremember/Aneesh.jpg': '/Coremember/Aneesh.jpg',
  'Coremember/Mourya.jpg': '/Coremember/Mourya.jpg',
  'Coremember/Navaneeth.jpg': '/Coremember/Navaneeth.jpg',
  'Coremember/Abhishek.jpg': '/Coremember/Abhishek.jpg',
  
  'Coremember/Sanvi.jpg': '/Coremember/Sanvi.jpg',
  'Coremember/Sinchanaa.jpg': '/Coremember/Sinchanaa.jpg',
  'Coremember/Anirudha.jpg': '/Coremember/Anirudha.jpg',
  'Coremember/Anagha.jpg': '/Coremember/Anagha.jpg',
  'Coremember/Shivaani.jpg': '/Coremember/Shivaani.jpg',
 'Coremember/Shreeharsha.jpg': '/Coremember/Shreeharsha.jpg',
  'Coremember/JEEVAN.jpg': '/Coremember/JEEVAN.jpg',
  'Coremember/priam.jpg': '/Coremember/priam.jpg',
  'Coremember/Diksha.jpg': '/Coremember/Diksha.jpg',
  'Coremember/Pawan.jpg': '/Coremember/Pawan.jpg',
  'Coremember/shevanii.png': '/Coremember/shevanii.png',
  'Coremember/Disha.png': '/Coremember/Disha.png',
  'Coremember/Sameeksha.png': '/Coremember/Sameeksha.png',
  'Coremember/Sinchana1.png': '/Coremember/Sinchana1.png',
  'Coremember/Anirudthr.jpg': '/Coremember/Anirudthr.jpg',
  'Coremember/shreejitha.png': '/Coremember/shreejitha.png',
  
  
};

const memberData = [
  {
    "category": "Cores",
    "members": [
      { "name": "Hemanth CS", "position": "President", "image": 'Coremember/Hemanthcs.jpg' },
      { "name": "Ananya D M", "position": "Vice President", "image": "Coremember/Ananya.JPG" },
      { "name": "Shashank G", "position": "Secretary", "image": "Coremember/Shashank.jpg" },
      { "name": "Sanket S N", "position": "Treasurer", "image": "Coremember/Sanket.jpeg" }
      
    ]
  },
  
  {
    "category": "Wings",
    "subcategories": [
      {
        "name": "Technical Leads",
        "members": [
          { "name": "Harsh Patel", "position": "Technical Lead", "image": "/Coremember/Harsh.jpg" },
          { "name": "Sushmitha G K", "position": "Technical Lead", "image": "/Coremember/Sushmitha.jpg" },
          { "name": "Pawan R Acharya", "position": "Technical Lead", "image": "/Coremember/Pavan.jpg" },
          { "name": "Kumari Priti Sinha", "position": "Technical Lead", "image": "/Coremember/Priti.jpg" }
        ]
      },
      {
        "name": "Industry & Relation Leads",
        "members": [
          { "name": "Pratham Ahuja", "position": "Industrial Relations Lead", "image": "/Coremember/Pratham.jpg" },
          { "name": "Pawan Menon", "position": "Industrial Relations Lead", "image": "/Coremember/Pawan.jpg" },
          { "name": "Shreejitha", "position": "Industrial Relations Lead", "image": "/Coremember/shreejitha.jpg" },
          { "name": "Anirudh R Shastry ", "position": "Industrial Relations Lead", "image": "/Coremember/Anirudthr.jpg" }
        ]
      },
      {
        "name": "R & D Leads",
        "members": [
          { "name": "Sindhoora K H", "position": "Research and Development Lead", "image": "/Coremember/Sindhoora.jpg" },
          { "name": "Shrusti M P", "position": "Research and Development Lead", "image": "/Coremember/Shrusti.jpg" },
          { "name": "Milan Bhat", "position": "Research and Development Lead", "image": "/Coremember/Milan.jpg" },
          { "name": "Dhanyashree D", "position": "Research and Development Lead", "image": "/Coremember/Dhanyashree.jpg" }
        ]
      },
      {
        "name": "Database Leads",
        "members": [
          { "name": "Shreya P V", "position": "Database Lead", "image": "/Coremember/Shreya.jpg" },
          { "name": "Sinchanaa S K", "position": "Database Lead", "image": "/Coremember/Sinchanaa.jpg" }
        ]
      },
      {
        "name": "Outreach & Publication Leads",
        "members": [
          { "name": "Pabitra Ranjan Jena", "position": "Outreach and Publications Lead", "image": "/Coremember/Pabitra.jpg" },
          { "name": "Hrudhya R ", "position": "Outreach and Publications Lead", "image": "/Coremember/Hrudhya.jpg" }
        ]
      },
      {
        "name": "Events Coordinators",
        "members": [
          { "name": "Aneesh Kulkarni", "position": "Event Coordinator", "image": "/Coremember/Aneesh.jpg" },
          { "name": "Mourya P", "position": "Event Coordinator", "image": "/Coremember/Mourya.jpg" },
          { "name": "Abhishek Patil", "position": "Event Coordinator", "image": "/Coremember/Abhishek.jpg" },
          { "name": "Disha RS", "position": "Event Coordinator", "image": "/Coremember/Disha.png" },
          { "name": "Sameeksha M Urs", "position": "Event Coordinator", "image": "/Coremember/Sameeksha.jpg" }
        ]
      },
      {
        "name":"Sponsorship & Editor in Chief leads",
        "members": [
          { "name":"Sinchana ", "position":"Sponsorship Lead", "image":"/Coremember/Sinchana1.png" },
          { "name": "Sanvi Mahajan", "position": "Editor in Chief", "image": "/Coremember/Sanvi.jpg" }
        ]
      },
      {
        "name": "Design Leads",
        "members": [
          
          { "name": "Jeevan Kamsagar HS", "position": "Design Lead", "image": "/Coremember/JEEVAN.jpg" },
          { "name": "Shreeharsha N L", "position": "Design Lead", "image": "/Coremember/Shreeharsha.jpg" },
          { "name": "Navaneeth", "position": "Design Lead", "image": "/Coremember/Navaneeth.jpg" },
         
        ]
      }
    ]
  },
  {
    "category": "Electronic Hubs",
    "members": [
       { "name": "Anirudha Rao", "position": "Electronics lead", "image": "/Coremember/Anirudha.jpg" },
      { "name": "Anagha M K", "position": "Electronics Lead", "image": "/Coremember/Anagha.jpg" },
      { "name": "Shivaani", "position": "Electronics Lead", "image": "/Coremember/shevanii.png" }
    ]
  },
  {
    "category": "Kinetic Builders",
    "members": [
      { "name": "Priam Dashtottar", "position": "Mechanical Lead", "image": "/Coremember/priam.jpg" },
       { "name": "Diksha Pandey", "position": "Mechanical Lead", "image": "/Coremember/Diksha.jpg" }
    ]
  }
];
const MemberCard = ({ name, position, image }) => {
  const fallbackImage = imageMap[image] || image;
  const webpImage = fallbackImage.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <div className="member-card">
      <picture>
        <source srcSet={webpImage} type="image/webp" />
        <img
          src={fallbackImage}
          alt={name}
          loading="lazy"
          className="member-image"
        />
      </picture>
      <div className="member-info-overlay">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

const CategorySection = ({ category, members }) => (
  <div>
    <h2 className={`category-title ${category === "Core" ? "bold-title" : ""}`}>{category}</h2>
    <div className="member-grid">
      {members.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          position={member.position}
          image={member.image}
        />
      ))}
    </div>
  </div>
);

const WingsSection = ({ category, subcategories }) => (
  <div>
    <h2 className={`category-title ${category === "Wings" ? "bold-title" : ""}`}>{category}</h2>
    {subcategories.map((subcategory, index) => (
      <div key={index} className="subcategory">
        <h3 className="category-title">{subcategory.name}</h3>
        <div className="member-grid">
          {subcategory.members.map((member, idx) => (
            <MemberCard
              key={idx}
              name={member.name}
              position={member.position}
              image={member.image}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Coremember = () => (
  <div className="core-members-page">
    {memberData.map((section, index) =>
      section.subcategories ? (
        <WingsSection
          key={index}
          category={section.category}
          subcategories={section.subcategories}
        />
      ) : (
        <CategorySection
          key={index}
          category={section.category}
          members={section.members}
        />
      )
    )}
  </div>
);

export default Coremember;