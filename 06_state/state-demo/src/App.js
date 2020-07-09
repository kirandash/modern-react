import React from 'react';
// import Game from './Game';
import Game2 from './Game2';
import SuperProps from './SuperProps';
import State from './State';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import BindAlt from './BindAlt';
import Clicker from './Clicker';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Game/> */}
      <Game2/>
      <SuperProps animal="dog" breed="beagle" />
      <State />
      <Rando maxNum={7} />
      <Button />
      <BrokenClick/>
      <BindAlt/>
      <Clicker/>
    </div>
  );
}

export default App;
