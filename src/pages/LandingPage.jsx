import React from "react";
import "./css/LandingPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../assets/123.png";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content">
        <img src={profile} alt="profile" className="profile-img" />
        <h1 className="name">Therenz Jaromohom</h1>
        <p className="role">Junior Photographer | Interface Designer</p>

        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaGithub /></a>
        </div>

        <div className="buttons">
          <button className="cv-btn" onClick={() => window.open("https://rinsuuu.vercel.app/", "_blank")}>See More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
