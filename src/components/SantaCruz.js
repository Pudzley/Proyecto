// src/components/SantaCruz.js
import React from 'react';

const SantaCruz = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comida en Santa Cruz</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://platostipicosdesantacruz.com/wp-content/uploads/2023/11/majadito-boliviano.jpg"
            alt="Comida en La Paz"
            className="img-fluid mb-1"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
        
        <div className="col-md-6">
          <p>
            Santa Cruz, con su diversidad cultural y agrícola, ofrece una rica mezcla
            de sabores en su gastronomía. Explora la variedad de platos tradicionales
            que reflejan la identidad de la región.
          </p>
          <p>
            Algunas especialidades incluyen el "Silpancho", una preparación de carne y arroz;
            el "Locro", una sopa espesa con carne y verduras; y las "Empanadas Cruceñas", un bocado delicioso.
          </p>

          {/* Botón de más información */}
          <a href="https://enlace.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Más información
          </a>
        </div>
      </div>

      {/* Video de Santa Cruz */}
      <div className="embed-responsive embed-responsive-16by9 mt-4">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tu-video-id-santacruz"
          title="Santa Cruz Video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default SantaCruz;
