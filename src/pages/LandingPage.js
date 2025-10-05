import React from "react";
import Navbar from "../components/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="section hero-section">
        <h1>Welcome to Steel Export</h1>
        <p>Your one-stop solution for awesome products and services.</p>
        <button>Get Started</button>
      </section>

      <section id="features" className="section features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature-box">
            <h3>Fast</h3>
            <p>Experience lightning-fast performance with our platform.</p>
          </div>
          <div className="feature-box">
            <h3>Secure</h3>
            <p>Your data is protected with top-level security protocols.</p>
          </div>
          <div className="feature-box">
            <h3>Reliable</h3>
            <p>We ensure smooth and consistent service 24/7.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>Got questions? We’d love to hear from you!</p>
        <button>Send Message</button>
      </section>
    </>
  );
};

export default LandingPage;
