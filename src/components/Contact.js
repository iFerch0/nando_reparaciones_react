import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiMessageSquare, FiFacebook } from "react-icons/fi";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact" id="contacto">
      <h2>Contáctanos</h2>
      <p>Escríbenos y te responderemos en menos de 24 horas</p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Describe tu consulta o problema..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          
          <button type="submit">Enviar mensaje</button>
        </form>

        <div className="contact-info">
          <p>
            <FiMapPin size={24} />
            <span><strong>Dirección:</strong> Montería, Córdoba, Colombia</span>
          </p>
          
          <p>
            <FiPhone size={24} />
            <span>
              <strong>Teléfono:</strong> 
              <a href="tel:+TU_NUMERO"> +57 123 456 7890</a>
            </span>
          </p>
          
          <p>
            <FiMail size={24} />
            <span>
              <strong>Correo:</strong> 
              <a href="mailto:contacto@tecnico.com"> contacto@tecnico.com</a>
            </span>
          </p>
          
          <div className="social-icons">
            <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noopener noreferrer">
              <FiMessageSquare size={24} />
              WhatsApp
            </a>
            <a href="https://facebook.com/TU_PAGINA" target="_blank" rel="noopener noreferrer">
              <FiFacebook size={24} />
              Facebook
            </a>
          </div>
          
          {/* Mapa de Google */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019682921144!2d-122.41941568468147!3d37.77492927975929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5c9b7c27%3A0x8e1f9b7f7f7f7f7f!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1633024891234!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación del negocio"
            ></iframe>
          </div>
        </div>
      </div>

      {submitted && (
        <p className="success-message">
          ¡Mensaje enviado con éxito! Pronto nos pondremos en contacto contigo.
        </p>
      )}
    </section>
  );
}

export default Contact;