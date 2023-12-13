// src/components/Pando.js
import React from 'react';

const Pando = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Pando</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://azafranbolivia.com/wp-content/uploads/2021/09/pando-gastronomia-comida-tipica-platos-bolivia-1024x683.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Pando, con su exuberante biodiversidad, ofrece una mezcla única de ingredientes
            para su gastronomía. Descubre los sabores frescos y auténticos de la región.
          </p>
          <p>
            Algunas especialidades incluyen el "Tacu Tacu de Plátano", un plato a base de plátanos maduros;
            el "Majadito", un guiso de carne y arroz; y las frutas tropicales frescas que abundan en la región.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Pando */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-pando"
          title="Pando Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Pando;
