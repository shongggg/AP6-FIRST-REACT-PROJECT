import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Use React Router for navigation
import "./Navbar.css";
import logo from "../assets/12345.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // ✅ Closes menu when a link is clicked

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="MyBrand Logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/overview" onClick={closeMenu}>Overview</Link></li>
        <li><Link to="/work-experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
