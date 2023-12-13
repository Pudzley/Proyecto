import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import LaPaz from './components/LaPaz';
import Beni from './components/Beni';
import Pando from './components/Pando';
import Tarija from './components/Tarija';
import SantaCruz from './components/SantaCruz';
import Potosi from './components/Potosi';
import Oruro from './components/Oruro';
import Cochabamba from './components/Cochabamba';
import Chuquisaca from './components/Chuquisaca';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/LaPaz" element={<LaPaz />} />
          <Route path="/Oruro" element={<Oruro />} />
          <Route path="/Cochabamba" element={<Cochabamba />} />
          <Route path="/Potosi" element={<Potosi />} />
          <Route path="/Tarija" element={<Tarija />} />
          <Route path="/Pando" element={<Pando />} />
          <Route path="/Chuquisaca" element={<Chuquisaca />} />
          <Route path="/SantaCruz" element={<SantaCruz />} />
          <Route path="/Beni" element={<Beni />} />
          {/* Agrega rutas para las otras páginas */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

