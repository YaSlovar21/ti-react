import React from 'react';
import logo from '../../logo.svg';
import Burton from '../Burton/Burton';
import CatalogDark from '../CatalogDarkSection/CatalogDarkSection';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Intro from '../Intro/Intro';


function App() {

  const [cardState, setCardState] = React.useState({})

  return (
    <div className="App">
      <HeaderMenu />
      <Burton />
      <Intro />
      <CatalogDark changecartfunction={setCardState} />
    </div>
  );
}

export default App;
