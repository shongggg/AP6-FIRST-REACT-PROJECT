import React from "react";
import Navbar from "../components/Navbar";
import "./css/PersonalOverview.css";

const PersonalOverview = () => {
  return (
    <div className="overview-container">
      <Navbar />
      <div className="overview-content">
        <h1>Personal Overview</h1>
        <p>
          I am an aspiring UI/UX and text logo designer with a creative flair for crafting clean and impactful designs.
          My interests extend to photography and video editing, where I enjoy exploring visual storytelling.
          Currently, I am honing my front-end coding skills to bring my design ideas to life and deliver intuitive and interactive user experiences.
          With a passion for aesthetics and functionality, I strive to create designs that are not only visually appealing but also user-centered.
          My goal is to continuously grow my skills and stay updated with design and technology trends.
          I am eager to collaborate on projects that challenge my creativity and technical abilities, allowing me to make meaningful contributions to the digital space.
        </p>
      </div>
      
    </div>
  );
};

export default PersonalOverview;
