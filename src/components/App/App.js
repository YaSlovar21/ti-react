import React from 'react';
import logo from '../../logo.svg';
import Burton from '../Burton/Burton';
import CatalogDark from '../CatalogDarkSection/CatalogDarkSection';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Intro from '../Intro/Intro';

import Register from '../Register/Register'

import { Routes, Route, Switch, useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function App() {
  const history = useHistory();

  const [cardState, setCardState] = React.useState({})


  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  function checkRegistr() {
    return localStorage.getItem('reg') ? true : false; 
  }

  React.useEffect(() => {
    if (checkRegistr()) {
      setIsLoggedIn(true);
    }
  }, [])

  React.useEffect(() => {
    if (isLoggedIn) {
      if (!localStorage.getItem('reg')) {
       
      } else {
        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
      }
    }
  }, [isLoggedIn]);


  function handleRegister() {
    setIsLoggedIn(true);
    history.push('/');
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <HeaderMenu  />
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Switch>
        <Route exact path="/">
          <Burton />
          <Intro isLoggedIn={isLoggedIn} />
          <CatalogDark changecartfunction={setCardState} />
        </Route>
        <Route path="/recv">
          <Register handleRegister={handleRegister}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
