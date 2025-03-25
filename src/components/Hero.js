import React, { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const titleElement = titleRef.current;
        const subtitleElement = subtitleRef.current;
        const listElement = listRef.current;

        // Textos mejorados
        const titleText = "¿Tu computadora está lenta o fallando?";
        const subtitleText = "¡No pierdas más tiempo! Recupera su máximo rendimiento en menos de 24 horas con nuestro servicio especializado.";
        const listItems = [
            "Diagnóstico gratuito",
            "Reparaciones garantizadas",
            "Optimización y seguridad",
            "Mantenimiento y soporte preventivo"
        ];

        // Limpiamos el contenido inicial
        titleElement.textContent = "";
        subtitleElement.textContent = "";
        listElement.innerHTML = "";

        let titleIndex = 0;
        let subtitleIndex = 0;
        let titleTimeout;
        let subtitleTimeout;

        function typeTitle() {
            if (titleIndex < titleText.length) {
                titleElement.textContent += titleText.charAt(titleIndex);
                titleIndex++;
                titleTimeout = setTimeout(typeTitle, 50);
            } else {
                typeSubtitle();
            }
        }

        function typeSubtitle() {
            if (subtitleIndex < subtitleText.length) {
                subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
                subtitleIndex++;
                subtitleTimeout = setTimeout(typeSubtitle, 30);
            } else {
                addListItems();
            }
        }

        function addListItems() {
            listItems.forEach((item, index) => {
                setTimeout(() => {
                    const li = document.createElement("li");
                    li.textContent = `✅ ${item}`;
                    listElement.appendChild(li);
                }, index * 300);
            });
        }

        typeTitle();

        return () => {
            clearTimeout(titleTimeout);
            clearTimeout(subtitleTimeout);
        };
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title" ref={titleRef}></h1>
                <p className="hero-subtitle" ref={subtitleRef}></p>
                <ul className="hero-list" ref={listRef}></ul>
                <button className="hero-button">
                    <span className="button-icon">🚀</span>
                    ¡Quiero mi diagnóstico gratuito!
                </button>
            </div>
            <div className="hero-image">
                <img src="/img/hero/hero.png" alt="Reparación de computadoras" />
            </div>
        </section>
    );
}

export default Hero;
