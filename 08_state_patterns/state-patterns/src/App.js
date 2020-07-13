import React from 'react';
import './App.css';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <ScoreKeeper/>
      <IconList/>
      <h1>8.3 Designing State - Lottery Example</h1>
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
