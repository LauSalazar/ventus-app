import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Reserva from './components/Reserva';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ventus-app" component={() => <Home />}></Route>
        <Route exact path="/ventus-app/nosotros" component={() => <Nosotros />}></Route>
        <Route exact path="/ventus-app/servicios" component={() => <Servicios />}></Route>
        <Route exact path="/ventus-app/contacto" component={() => <Contacto />}></Route>
        <Route exact path="/ventus-app/reserva" component={() => <Reserva />}></Route>
      </Switch>
    </Router>
  );
}

export default App;