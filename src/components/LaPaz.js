// src/components/LaPaz.js
import React from 'react';

const LaPaz = () => {
  return (
    <div>
      <h2 className="mb-4">Comida en La Paz</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://blog.gustu.bo/wp-content/uploads/2018/01/PLATO-PACE%C3%91O-623x375.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            La Paz es conocida por su rica tradición culinaria, que refleja la diversidad
            de culturas y sabores de Bolivia. Aquí, puedes disfrutar de una variedad de
            platos auténticos que incorporan ingredientes locales y técnicas de cocina
            tradicionales.
          </p>
          <p>
            Algunas de las delicias más destacadas incluyen la "Salteña", una empanada
            rellena de carne y otros ingredientes; la "Llajwa", una salsa picante a base
            de tomate y locoto; y la "Sopa de Maní", una sopa espesa con maní y carne.
          </p>

          {/* Botón de más información */}
          <a href="https://blog.gustu.bo/wp-content/uploads/2018/01/PLATO-PACE%C3%91O-623x375.jpg" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de La Paz */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://youtu.be/1iqIVw_taXg"
          title="La Paz Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LaPaz;

