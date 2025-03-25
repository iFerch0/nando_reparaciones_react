import React from "react";
import { FiShield, FiTool, FiClock } from "react-icons/fi";
import "./Guarantee.css";

function Guarantee() {
  const guarantees = [
    {
      icon: <FiShield />,
      title: "Garantía Certificada",
      text: "Todas nuestras reparaciones incluyen garantía de 90 días en mano de obra y componentes"
    },
    {
      icon: <FiTool />,
      title: "Repuestos Originales",
      text: "Usamos exclusivamente piezas certificadas por los fabricantes"
    },
    {
      icon: <FiClock />,
      title: "Servicio Rápido",
      text: "Reparaciones urgentes disponibles en menos de 24 horas hábiles"
    }
  ];

  return (
    <section className="guarantee" id="garantia">
      <h2>
        <FiShield />
        Nuestro Compromiso
      </h2>
      <p>Garantía de servicio técnico profesional con los más altos estándares de calidad</p>
      
      <div className="guarantee-grid">
        {guarantees.map((item, index) => (
          <div key={index} className="guarantee-card">
            <div className="guarantee-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Guarantee;