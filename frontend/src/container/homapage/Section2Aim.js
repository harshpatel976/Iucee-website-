import React from 'react';
import './homepage.css';

const Section2Aim = () => {
  return (
    <div className="stellarGrid" id="aim-section">
      <div className="cosmicSidebar">
        <h1 className="orbitText">AIM</h1>
      </div>

      <div className="galaxyLayout">
        <div className="nebulaColumn">
          <h2 className="astroTitle">Discovery</h2>
          <p className="quantumDesc">
            We kick things off with a deep-dive discovery session to understand your goals, challenges, and vision. It's all about getting on the same page so we can recommend the best path forward.
          </p>
          <div className="iconSphere"></div>
        </div>

        <div className="nebulaColumn">
          <h2 className="astroTitle">Strategy</h2>
          <p className="quantumDesc">
            Every great project starts with a solid plan. From brand identity to backend architecture, we build a tailored strategy that sets the foundation for a successful outcome.
          </p>
          <div className="iconSquare"></div>
        </div>

        <div className="nebulaColumn">
          <h2 className="astroTitle">Design</h2>
          <p className="quantumDesc">
            Once the strategy is clear, we bring your vision to life through thoughtful and creative design. Each screen, element, and interaction is crafted with care and reviewed for your approval.
          </p>
          <div className="iconSemiCircle"></div>
        </div>

        <div className="nebulaColumn">
          <h2 className="astroTitle">Build</h2>
          <p className="quantumDesc">
            With the designs finalized, we move into development. Whether we've designed it or you're bringing your own, we use proven processes to build a smooth, functional, and scalable product.
          </p>
          <div className="iconTriangles"></div>
        </div>
      </div>
    </div>
  );
};

export default Section2Aim;
