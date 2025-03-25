import React from "react";
import { FiZap, FiTool, FiDollarSign, FiRefreshCw } from "react-icons/fi";
import "./WhyUs.css";

function WhyUs() {
  const features = [
    {
      icon: <FiZap />,
      title: "Servicio Rápido",
      description: "Reparaciones rápidas para que sigas trabajando."
    },
    {
      icon: <FiTool />,
      title: "Expertos Certificados",
      description: "Técnicos capacitados con certificaciones internacionales."
    },
    {
      icon: <FiDollarSign />,
      title: "Precios Accesibles",
      description: "Servicios premium a precios competitivos."
    },
    {
      icon: <FiRefreshCw />,
      title: "Garantía de Servicio",
      description: "Soporte extendido y revisiones gratuitas por 30 días."
    }
  ];

  return (
    <section className="why-us" id="porque-elegirnos">
      <h2 className="why-us-title">¿Por qué elegirnos?</h2>
      <div className="why-us-container">
        {features.map((feature, index) => (
          <div className="why-us-card" key={index}>
            <span className="why-us-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="why-us-cta">
        <a href="#contact" className="cta-button">
          Solicitar Presupuesto
        </a>
      </div>
    </section>
  );
}

export default WhyUs;