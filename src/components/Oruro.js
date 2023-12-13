// src/components/Oruro.js
import React from 'react';

const Oruro = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Oruro</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://correodelsur.com/img/contents/images_980/2019/09/28/6b59e9f4-3379-4e3c-873c-e57577da8d0e.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Oruro es conocido por su rica tradición culinaria, que destaca la influencia
            de las diversas culturas presentes en la región. Disfruta de platos auténticos
            que resaltan los sabores locales y las técnicas de cocina únicas.
          </p>
          <p>
            Algunas delicias notables incluyen el "Cuñapé", un panecillo de queso;
            el "Sajta de Pollo", un guiso picante de pollo; y la "Lawa", una sopa de cordero.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Oruro */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-oruro"
          title="Oruro Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Oruro;
