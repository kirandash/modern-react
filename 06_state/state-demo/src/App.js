import React from 'react';
// import Game from './Game';
import Game2 from './Game2';
import SuperProps from './SuperProps';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Game/> */}
      <Game2/>
      <SuperProps animal="dog" breed="beagle" />
    </div>
  );
}

export default App;
