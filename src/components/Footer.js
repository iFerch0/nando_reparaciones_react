import React from "react";
import { FiHome, FiTool, FiMessageSquare, FiUsers, FiMail, FiPhone, FiMapPin, FiFacebook } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Branding */}
        <div className="footer-brand">
          <h2>NANDO_REPARACIONES</h2>
          <p>Servicio técnico especializado en hardware y software con 10+ años de experiencia</p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
          <li>
  <a href="#inicio">
    <FiHome size={16} /> 
    Inicio
  </a>
</li> 
            <li><a href="#servicios"><FiTool /> Servicios</a></li>
            <li><a href="#testimonios"><FiUsers /> Testimonios</a></li>
            <li><a href="#contacto"><FiMessageSquare /> Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p><FiMapPin /> Montería, Córdoba, Colombia</p>
          <p><FiPhone /> <a href="tel:+573001234567">+57 300 123 4567</a></p>
          <p><FiMail /> <a href="mailto:contacto@nandorep.com">contacto@nandorep.com</a></p>
          
          <div className="social-icons">
            <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noopener noreferrer">
              <FiMessageSquare />
              WhatsApp
            </a>
            <a href="https://facebook.com/TU_PAGINA" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NANDO_REPARACIONES. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;