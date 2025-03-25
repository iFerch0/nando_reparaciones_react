import React from "react";
import { FiMapPin } from "react-icons/fi";
import "./Location.css";

function Location() {
  return (
    <section className="location" id="ubicacion">
      <h2>
        <FiMapPin />
        Nuestra Ubicación
      </h2>
      <p>Visita nuestro taller físico para una atención personalizada</p>
      
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5394171963735!2d-75.89292832431866!3d8.735208693517276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a31e61404d9b1%3A0x21104ae70b44122e!2sFernando%20-%20T%C3%A9cnico%20en%20Computadores!5e0!3m2!1ses-419!2sco!4v1741910575954!5m2!1ses-419!2sco"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="address-info">
        <strong>Dirección exacta:</strong> Cl. 29 #23-33, Montería, Córdoba
      </p>
    </section>
  );
}

export default Location;