import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Achievement.css";

const achievements = [
  {
    title: "Hackathon Victory",
    prize: "🏆 Won 1st Prize at Smart India Hackathon",
    images: ["/events/Events1/photo2.JPG", "/events/Events1/photo2.JPG"],
  },
  {
    title: "Robotics Competition",
    prize: "🤖 Secured Runner-Up Position in Robotics Nationals",
    images: ["/events/Events1/photo2.JPG", "/events/Events1/photo2.JPG"],
  },
  {
    title: "Paper Presentation",
    prize: "📄 Best Paper Award at Tech Conference 2024",
    images: ["/events/Events1/photo2.JPG", "/events/Events1/photo2.JPG"],
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,              // <-- THIS enables automatic sliding
  autoplaySpeed: 4000,         // <-- Change time interval (ms)
  pauseOnHover: true           // Optional: pause when mouse is over
};

const AchievementPage = () => {
  return (
    <div className="achievement-container">
      {achievements.map((achievement, index) => (
        <div className="achievement-card" key={index}>
          <Slider {...sliderSettings}>
            {achievement.images.map((img, i) => (
              <div key={i} className="slider-image-wrapper">
                <img src={img} alt={`Slide ${i}`} className="achievement-image" />
                <div className="image-overlay">
                  <h2 className="achievement-title">{achievement.title}</h2>
                  <p className="achievement-prize">{achievement.prize}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default AchievementPage;
