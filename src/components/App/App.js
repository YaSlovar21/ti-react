import React from 'react';
import logo from '../../logo.svg';
import Burton from '../Burton/Burton';
import CatalogDark from '../CatalogDark/CatalogDark';
import Intro from '../Intro/Intro';


function App() {

  const [cardState, setCardState] = React.useState({})

  return (
    <div className="App">
      <header className="header">
        <Burton />
      </header>
      <Intro />
      <CatalogDark changecartfunction={setCardState} />
    </div>
  );
}

export default App;
