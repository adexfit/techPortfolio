import React, { useState, useContext } from "react";
import "./Navbar.css";
import AppScrollContext from "../contexts/AppScrollContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const {
    scrollToContact,
    scrollToDivRef,
    scrollToProject,
    scrollToProjRef,
    scrollToTop,
    scrollToTopRef,
  } = useContext(AppScrollContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const checkMobileNavOverlay = () => {
    isOpen ? setIsOpen(false) : "";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Column */}
        <div className="logo">Elisha</div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links Column */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={closeMenu}>
            <a href="#home" onClick={scrollToTop}>
              Home
            </a>
          </li>
          <li className="dropdown" onClick={scrollToProject}>
            <a href="#project" onClick={closeMenu}>
              Project
            </a>
            {/* <ul className="dropdown-menu">
              <li>
                <a
                  href="https://external-link1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  External 1
                </a>
              </li>
              <li>
                <a
                  href="https://external-link2.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  External 2
                </a>
              </li>
              <li>
                <a
                  href="https://external-link3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  External 3
                </a>
              </li>
              <li>
                <a
                  href="https://external-link4.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  External 4
                </a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li>
            {/* <a href="#download" onClick={closeMenu}>
              Download
            </a> */}
            <a
              href={`${assets.AdeboyeElishaFrontendResume05}`}
              target="_blank"
              onClick={closeMenu}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
