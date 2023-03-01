import React from 'react';
import logo from '../../logo.svg';
import Burton from '../Burton/Burton';
import CatalogDark from '../CatalogDarkSection/CatalogDarkSection';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Intro from '../Intro/Intro';

import Register from '../Register/Register'

import { Routes, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function App() {

  const [cardState, setCardState] = React.useState({})

  return (
    <div className="App">
      <HeaderMenu />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Burton />
          <Intro />
          <CatalogDark changecartfunction={setCardState} />
        </Route>
        <Route path="/recv">
          <Register />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
