import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Enlace al inicio con solo el logotipo */}
        <NavLink className="navbar-brand" to="/">Comidas Bolivianas</NavLink>

        {/* Botón de alternancia para la barra de navegación en dispositivos móviles */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/LaPaz">La Paz</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Oruro">Oruro</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cochabamba">Cochabamba</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Potosi">Potosi</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Tarija">Tarija</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Pando">Pando</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Chuquisaca">Chuquisaca</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SantaCruz">Santa Cruz</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Beni">Beni</NavLink>
            </li>
            {/* Agrega enlaces para las otras páginas */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
