
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';

import AppHeader from './components/header';
import AppAbout from './components/about';
import AppFooter from './components/footer';
import AppServices from './components/services';
import PaginaInicial from './components/PaginaInicial';
import AppContact from './components/contact';


function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader  />
        <Routes>
          <Route path="/" exact Component={PaginaInicial} />
          <Route path="/servicos" Component={AppServices} />
          <Route path="/contacte_nos" Component={AppContact} />
          <Route path="/sobre_nos" Component={AppAbout} />
        </Routes>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
