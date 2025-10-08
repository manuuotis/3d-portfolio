import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    // create an throttled event listener for when the user scrolls
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // check if the user has scrolled down at least 10px
          // if so, set the state to true
          const isScrolled = window.scrollY > 10;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    // add the event listener to the window with passive option
    window.addEventListener("scroll", handleScroll, { passive: true });

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="logo">
            EMMANUEL OTIENO
          </a>

          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="contact-btn group hidden lg:flex">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={handleMobileMenuClick}
      />

      {/* Mobile Menu Drawer */}
      <nav className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-turquoise-50 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navLinks.map(({ link, name }, index) => (
            <li
              key={name}
              className="mobile-menu-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={link} onClick={handleMobileMenuClick}>
                <span className="mobile-menu-number">0{index + 1}</span>
                <span className="mobile-menu-text">{name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <a
            href="#contact"
            className="mobile-contact-btn"
            onClick={handleMobileMenuClick}
          >
            <span>Contact me</span>
            <span className="mobile-contact-arrow">→</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
