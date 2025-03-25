import React, { useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}

export default ThemeToggle;
