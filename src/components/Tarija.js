// src/components/Tarija.js
import React from 'react';

const Tarija = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Tarija</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="http://www.aie-gov.org/upload/es/photos/11349_medium.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Tarija, conocida como la "Ciudad de la Sonrisa", ofrece una increíble variedad
            de platos regionales. Descubre la fusión de sabores locales y técnicas de cocina
            tradicionales en cada bocado.
          </p>
          <p>
            Algunas especialidades incluyen la "Huminta", una especie de pastel de maíz;
            el "Saice", un guiso picante; y los vinos de alta calidad producidos en la región.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Tarija */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-tarija"
          title="Tarija Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Tarija;
