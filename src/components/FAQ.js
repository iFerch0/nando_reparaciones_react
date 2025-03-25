import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./FAQ.css";

const faqs = [
  {
    question: "¿Cuánto cuesta el servicio de reparación?",
    answer: "El precio varía según el tipo de daño. Ofrecemos diagnóstico gratuito y presupuesto sin compromiso."
  },
  {
    question: "¿Cuánto tiempo tardan en reparar mi equipo?",
    answer: "La mayoría de las reparaciones se completan en 24 horas. Casos complejos pueden tardar hasta 72 horas."
  },
  {
    question: "¿Ofrecen garantía en sus servicios?",
    answer: "Sí, garantía de 90 días en todas las reparaciones. Cobertura extendida disponible para empresas."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, transferencias, tarjetas (Visa/Mastercard) y PayPal. Financiamiento disponible."
  },
  {
    question: "¿Ofrecen servicio a domicilio?",
    answer: "Sí, servicio técnico móvil en Montería y Cereté. Costo adicional según ubicación."
  },
  {
    question: "¿Cuál es su horario de atención?",
    answer: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM | Urgencias 24/7 con cita."
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="preguntas-frecuentes">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              {openIndex === index ? (
                <FiChevronUp className="faq-icon" />
              ) : (
                <FiChevronDown className="faq-icon" />
              )}
            </button>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              role="region"
              aria-hidden={openIndex !== index}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;