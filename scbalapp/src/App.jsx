import React from 'react';

import './App.scss';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Layout/Header/Header';

import Home from './pages/Home/Home';

import Udstyr from './pages/DykkerUdstyr/DykkerUdtyr';

import Rejser from './pages/DykkerRejser/DukkerRejser';

import Kurser from './pages/DykkerKurser/DykkerKurser';

import Kontakt from './pages/Kontakt/Kontakt';

import OmOs from './pages/OmOs/OmOs';

import Footer from './pages/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <body className = "container-sm container-md container-lg container-xl">
        <Header />

        <Switch>
          <Route path="/" component={ Home } exact />

          <Route path="/dykkerudstyr" component={ Udstyr } />

          <Route path="/dykkerrejser" component={ Rejser} />

          <Route path="/dykkerkurser" component={ Kurser} />

          <Route path="/kontakt" component={ Kontakt} />

          <Route component={ OmOs } />
        </Switch>

        <Footer />

      </body>
    </BrowserRouter>
  );
}

export default App;
