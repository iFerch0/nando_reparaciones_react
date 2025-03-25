import React from "react";
import { FiMessageCircle, FiPhone, FiTool } from "react-icons/fi";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>
          <FiTool className="cta-icon" /> ¡Reparación Rápida y Confiable! Contáctanos Ahora
        </h2>
        <p>Habla con nuestros expertos y recibe ayuda en menos de 15 minutos.</p>
        <div className="cta-buttons">
          <a
            href="https://wa.me/573024677765"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button whatsapp"
          >
            <FiMessageCircle className="cta-icon" />
            WhatsApp Instantáneo
          </a>
          <a href="tel:+TU_NUMERO" className="cta-button call">
            <FiPhone className="cta-icon" />
            Llamada Directa
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;