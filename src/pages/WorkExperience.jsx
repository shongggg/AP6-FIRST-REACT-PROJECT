import React from "react";
import Navbar from "../components/Navbar";
import "./css/WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="experience-container">
      <Navbar />

      <section className="experience-section">
        <h1 className="experience-heading">Work Experience</h1>

        <div className="timeline">
          <div className="timeline-item">
            <h2>Junior Photographer</h2>
            <h4>2023 - Present</h4>
            <p>Specialized in product photography that enhances branding and market appeal with professional visuals. Passionate about capturing breathtaking landscapes and scenery, turning moments into striking works of art.</p>
          </div>
          <div className="timeline-item">
            <h2>Logo Designer</h2>
            <h4>2021 - 2022</h4>
            <p>Passionate about crafting clean text-based logos that bring brand identities to life. From elegant wordmarks to bold lettermarks, every design is thoughtfully created to make a lasting impression.</p>
          </div>
          <div className="timeline-item">
            <h2>Interface Designer</h2>
            <h4>2023 - 2024</h4>
            <p>Focused on layout design and user interface structuring, creating clean, visually appealing, and user-friendly experiences. Currently exploring prototyping and interactive transitions to enhance usability and engagement.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
