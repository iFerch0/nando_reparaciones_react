import React, { useState, useEffect } from 'react';
import { 
    FiTool, 
    FiSettings, 
    FiServer, 
    FiHardDrive, 
    FiHeadphones, 
    FiUser,
    FiX 
} from 'react-icons/fi';
import './Services.css';

function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalClosing, setIsModalClosing] = useState(false);

    const handleCloseModal = () => {
        setIsModalClosing(true);
        setTimeout(() => {
            setSelectedService(null);
            setIsModalClosing(false);
        }, 300);
    };

    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => {
                const modalContent = document.querySelector('.modal-content');
                if (modalContent) modalContent.getBoundingClientRect();
            });
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedService]);

    const services = [
        {
            icon: <FiTool />,
            title: "Reparaciones Generales",
            description: "Reparaciones rápidas y confiables con garantía",
            details: {
                includes: [
                    "Diagnóstico gratuito",
                    "Cambio de componentes defectuosos",
                    "Limpieza interna profunda",
                    "Optimización del sistema operativo",
                    "Garantía de 90 días"
                ],
                excludes: [
                    "Repuestos físicos (se cotizan por separado)",
                    "Recuperación de datos",
                    "Daños por líquidos no cubiertos por garantía"
                ]
            }
        },
        {
            icon: <FiSettings />,
            title: "Mantenimiento Preventivo",
            description: "Prolonga la vida útil de tu equipo",
            details: {
                includes: [
                    "Limpieza de componentes electrónicos",
                    "Actualización de controladores",
                    "Optimización de arranque",
                    "Revisión de sistema de refrigeración",
                    "Informe detallado del estado"
                ],
                excludes: [
                    "Cambio de piezas físicas",
                    "Reparación de componentes dañados",
                    "Software no autorizado"
                ]
            }
        },
        {
            icon: <FiServer />,
            title: "Instalaciones Especializadas",
            description: "Configuración profesional de redes y servidores",
            details: {
                includes: [
                    "Configuración de redes LAN/WAN",
                    "Instalación de servidores físicos y virtuales",
                    "Seguridad perimetral",
                    "Cableado estructurado",
                    "Certificación de red"
                ],
                excludes: [
                    "Equipos de red físicos",
                    "Licencias de software",
                    "Mantenimiento continuo"
                ]
            }
        },
        {
            icon: <FiHardDrive />,
            title: "Recuperación de Datos",
            description: "Recupera tu información de forma segura",
            details: {
                includes: [
                    "Diagnóstico gratuito",
                    "Recuperación de particiones",
                    "Extracción de datos críticos",
                    "Sistema de almacenamiento temporal",
                    "Informe detallado"
                ],
                excludes: [
                    "Reparación física de discos",
                    "Recuperación de datos sobrescritos",
                    "Garantía de recuperación total"
                ]
            }
        },
        {
            icon: <FiHeadphones />,
            title: "Soporte Remoto",
            description: "Asistencia técnica inmediata en línea",
            details: {
                includes: [
                    "Atención inmediata vía TeamViewer/AnyDesk",
                    "Resolución de problemas en vivo",
                    "Configuración remota de software",
                    "Asesoría técnica personalizada",
                    "Soporte 24/7"
                ],
                excludes: [
                    "Intervención física en equipo",
                    "Reparaciones hardware",
                    "Servicios fuera de horario (según plan)"
                ]
            }
        },
        {
            icon: <FiUser />,
            title: "Asesoría Personalizada",
            description: "Consultoría técnica para empresas y usuarios avanzados",
            details: {
                includes: [
                    "Análisis de infraestructura IT",
                    "Plan de migración a nuevas tecnologías",
                    "Optimización de procesos técnicos",
                    "Capacitación personalizada",
                    "Informe ejecutivo detallado"
                ],
                excludes: [
                    "Implementación física de soluciones",
                    "Software de terceros",
                    "Soporte técnico continuo"
                ]
            }
        }
    ];

    return (
        <section className="services" id="servicios">
            <h2 className="services-title">Nuestros Servicios Técnicos</h2>
            
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <span className="service-icon">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <button 
                            className="service-btn" 
                            onClick={() => setSelectedService(service)}
                            aria-label={`Ver detalles de ${service.title}`}
                        >
                            Más detalles
                        </button>
                    </div>
                ))}
            </div>

            {selectedService && (
                <div className={`modal-overlay ${isModalClosing ? 'closing' : 'active'}`}>
                    <div className="modal-content">
                        <button 
                            className="modal-close"
                            onClick={handleCloseModal}
                            aria-label="Cerrar modal"
                        >
                            <FiX />
                        </button>
                        
                        <div className="modal-header">
                            <span className="service-icon">{selectedService.icon}</span>
                            <h3>{selectedService.title}</h3>
                        </div>

                        <div className="modal-body">
                            <div className="includes-section">
                                <h4>Este servicio incluye:</h4>
                                <ul>
                                    {selectedService.details.includes.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="excludes-section">
                                <h4>No incluye:</h4>
                                <ul>
                                    {selectedService.details.excludes.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-cta">
                                <a href="#contact" className="service-btn" onClick={handleCloseModal}>
                                    Solicitar Presupuesto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Services;