import React from 'react';
// import Settings from './settings/Settings';
import Home from '../pages/home';
import About from "../components/sections/about"
/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../styles/css/styles.scss"
import Navegation from '../pages/navegation';
import Redes from "../pages/redes"

const App = () => {
  return (
    <div>
      <Home />
      <About></About>
      <Navegation></Navegation>
      <Redes></Redes>

    </div>
  );
};

export default App;
