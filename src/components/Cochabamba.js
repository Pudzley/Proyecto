// src/components/Cochabamba.js
import React from 'react';

const Cochabamba = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Cochabamba</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Silpancho_cochalo.jpg/273px-Silpancho_cochalo.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Cochabamba es famosa por su diversidad gastronómica y la calidad de sus ingredientes.
            Explora una variedad de platos que incorporan productos frescos de la región y técnicas
            de cocina tradicionales.
          </p>
          <p>
            Algunas delicias para probar son la "Pique Macho", un plato de carne picada;
            la "Trucha a la Plancha", una trucha preparada a la parrilla; y el "Chaq'u", una bebida refrescante.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Cochabamba */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-cochabamba"
          title="Cochabamba Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Cochabamba;
