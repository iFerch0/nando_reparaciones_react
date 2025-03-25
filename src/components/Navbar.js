import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
          >
            <circle cx="50" cy="50" r="40" fill="white" />
            <text
              x="50"
              y="50"
              fontFamily="sans-serif"
              fontSize="50"
              fontWeight="bold"
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
            >
              N
            </text>
          </svg>
          <span className="logo-text">Nando</span>
        </div>

        {/* Menú para desktop */}
        <ul className="navbar-menu">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#whyus">¿Por qué elegirnos?</a>
          </li>
          <li>
            <a href="#testimonials">Testimonios</a>
          </li>
          {/* Eliminado el enlace "Contacto" para evitar redundancia */}
        </ul>

        <a href="#contact" className="navbar-button">
          Cotizar
        </a>

        {/* Botón hamburguesa para mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menú mobile */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="#hero" onClick={toggleMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" onClick={toggleMenu}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#whyus" onClick={toggleMenu}>
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={toggleMenu}>
                  Testimonios
                </a>
              </li>
            </ul>
            <a href="#contact" className="navbar-button mobile-cta" onClick={toggleMenu}>
              Cotizar
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;