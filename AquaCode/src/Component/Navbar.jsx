import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


const Navbar = () => {
  // Track if page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar background when scrolling
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu after clicking a link (mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "navbar-dark bg-dark shadow" : "navbar-light bg-transparent"
      } transition`}
    >
      <div className="container">
        {/* Logo */}
        <b className="navbar-brand fw-bold text-info fs-3" href="#home">
          AquaCode
        </b>

        {/* Toggle Button (for mobile view) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-center">
            {["Home", "About", "Services", "Contact"].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="nav-link mx-2 fw-semibold text-uppercase hover-effect"
                  onClick={closeMenu}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;