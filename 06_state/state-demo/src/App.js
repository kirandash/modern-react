import React from 'react';
// import Game from './Game';
import Game2 from './Game2';
import SuperProps from './SuperProps';
import State from './State';
import Rando from './Rando';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Game/> */}
      <Game2/>
      <SuperProps animal="dog" breed="beagle" />
      <State />
      <Rando maxNum={7} />
    </div>
  );
}

export default App;
