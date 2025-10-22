import React from "react";
import Navbar from "../components/Navbar";
import "./css/Education.css";

const Education = () => {
  return (
    <div className="experience-container">
      <Navbar />

      <section className="experience-section">
        <h1 className="experience-heading">Educational Attainment</h1>

        <div className="timeline">
          <div className="timeline-item">
            <h2>Cebu Technological University - Danao Campus</h2>
            <h4>2022 - Present</h4>
            <p>Pursuing a Bachelor’s degree focused on technology and design, developing skills in programming, user interface design, and system development. Gained practical experience through hands-on projects and real-world applications.</p>
          </div>
          <div className="timeline-item">
            <h2>Mandaue City Comprehensive National High School</h2>
            <h4>Graduated 2022</h4>
            <p>Completed secondary education with a strong foundation in academic and personal development. Actively participated in school activities and projects that enhanced teamwork, creativity, and discipline.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
