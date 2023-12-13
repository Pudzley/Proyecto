// src/components/Beni.js
import React from 'react';

const Beni = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Beni</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://comidasbolivianas.org/wp-content/uploads/2023/01/queperi-comida-tipica-beni-bolivia-1024x932.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Beni, con su vasta selva amazónica, ofrece una cocina única que aprovecha los
            ingredientes locales. Descubre los sabores exóticos y auténticos de la región.
          </p>
          <p>
            Algunas delicias para probar son el "Tacuarembó", un guiso de pescado;
            la "Majadita de Guayaba", un postre tradicional; y los frutos tropicales frescos de la selva.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Beni */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-beni"
          title="Beni Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Beni;
