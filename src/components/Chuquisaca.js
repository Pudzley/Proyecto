// src/components/Chuquisaca.js
import React from 'react';

const Chuquisaca = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Chuquisaca</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://eldeber.com.bo/_next/image?url=https%3A%2F%2Farchive.eldeber.com.bo%2FFiles%2FSizes%2F2021%2F5%2F25%2Fespecial-de-chuquisaca_1945869874_760x520.jpg%3F487254979.63&w=1920&q=75"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Chuquisaca, con su rica historia y tradiciones, ofrece una variedad de platos
            que reflejan la herencia cultural de la región. Disfruta de la fusión de sabores
            auténticos y técnicas de cocina tradicionales.
          </p>
          <p>
            Algunas especialidades incluyen la "Salteña", una empanada rellena de carne;
            el "Choclo Phuti", un plato a base de maíz; y el "Api Morado", una bebida caliente.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Chuquisaca */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-chuquisaca"
          title="Chuquisaca Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Chuquisaca;
