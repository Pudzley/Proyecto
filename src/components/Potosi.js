// src/components/Potosi.js
import React from 'react';

const Potosi = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Potosí</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://correodelsur.com/img/contents/images_980/2019/09/08/9da56c98-0daf-488b-b97f-7151fc08432d.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Potosí, conocida por su rica historia minera, también ofrece una variedad
            de platos tradicionales que reflejan la diversidad cultural de la región.
          </p>
          <p>
            Algunas delicias para probar son el "Fricasé Potosino", un guiso de carne;
            el "Api", una bebida caliente a base de maíz; y las "Empanadas de Queso", un bocado delicioso.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Potosí */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-potosi"
          title="Potosí Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Potosi;
