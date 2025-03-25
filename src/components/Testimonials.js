import React from "react";
import { FaStar } from "react-icons/fa"; // Asegúrate de instalar react-icons
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      text: "Servicio rápido y profesional. ¡Muy recomendable!",
      author: "Neller Pellegrino",
      rating: 5,
    },
    {
      text: "Calidad y atención al cliente excepcionales.",
      author: "Andrés Petro",
      rating: 5,
    },
    {
      text: "Excelente servicio y precios accesibles. Recomendado.",
      author: "Nelson Velasco",
      rating: 5,
    },
    {
      text: "Muy profesional y confiable. Lo recomiendo.",
      author: "Livan Torres Nuñez",
      rating: 5,
    },
    {
      text: "Rápido, de calidad y a buen precio. ¡Excelente!",
      author: "Odalis Galeano",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((review, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="testimonial-text">"{review.text}"</p>
            <h4 className="testimonial-author">— {review.author}</h4>
          </div>
        ))}
      </div>

      <div className="testimonials-button-container">
        <a
          href="https://maps.app.goo.gl/RgEhFcmxJ5qK7Zng6"
          target="_blank"
          rel="noopener noreferrer"
          className="testimonials-button"
        >
          Ver Más Opiniones de Clientes Satisfechos
        </a>
      </div>
    </section>
  );
}

export default Testimonials;