import React from "react";
import { FiMonitor } from "react-icons/fi";
import "./Brands.css";

function Brands() {
  const brands = [
    { name: "HP", logo: "/img/brands/hp.png" },
    { name: "Dell", logo: "/img/brands/dell.png" },
    { name: "Lenovo", logo: "/img/brands/lenovo.png" },
    { name: "Asus", logo: "/img/brands/asus.png" },
    { name: "Acer", logo: "/img/brands/acer.png" },
    { name: "Microsoft", logo: "/img/brands/microsoft.png" },
    { name: "Intel", logo: "/img/brands/intel.png" },
    { name: "NVIDIA", logo: "/img/brands/nvidia.png" },
    { name: "Samsung", logo: "/img/brands/samsung.png" },
    { name: "Logitech", logo: "/img/brands/logitech.png" },
    { name: "Kingston", logo: "/img/brands/kingston.png" },
    { name: "Western Digital", logo: "/img/brands/wd.png" },
    { name: "AMD", logo: "/img/brands/amd.png" },
    { name: "Corsair", logo: "/img/brands/corsair.png" }
  ];

  return (
    <section className="brands" id="marcas">
      <h2>
        <FiMonitor />
        Marcas Certificadas
      </h2>
      <div className="brand-logos">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <img 
              src={brand.logo} 
              alt={brand.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;