import React from 'react';
import Login from './Componentes/auth/Login';
import Registrar from './Componentes/auth/Registrar';
import Proyectos from './Componentes/proyectos/Proyectos';
import {
  BrowserRouter as Router, // siempre se deben importar estos 3 elementos cuando se van a crear las rutas en react
  Switch,
  Route
} from 'react-router-dom';
import ProyectoState from './context/Proyectos/proyectoState';

// en el componente principal se llaman los provider del context ṕara poder ser consumidos por los compoentes

function App() {
  return (
    //agregar los consumer del context antes de todos los componentes y el routing

    <ProyectoState>
      <Router> {/* El Componente router va rodear todas las rutas de la aplicacion*/}
        <Switch> {/* El Componente Switch detecta cual de las rutas se visita para redirecionar y renderizar el componente
          de esa ruta
        */}

        <Route exact path="/" component={Login} />
        <Route exact path="/registrar" component={Registrar} />
        <Route exact path="/proyectos" component={Proyectos} />

        {/*
        
          La propiedad Route es la que va renderizar los componentes
          
          Tienen las propiedades exact path y component

          exact path="/" es la que lee la ruta que le voy a pasar para que renderice un componente
          component={Login} esta propiedad llama al componente que va cargar

          como la ruta es la raiz seria el login
        */}

        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
