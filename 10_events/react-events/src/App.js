import React from 'react';
import './App.css';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import WiseSquareWithProps from './WiseSquareWithProps';
import ExperimentalSquare from './ExperimentalSquare';
import ButtonList from './ButtonList';

function App() {
  return (
    <div className="App">
      <h1>10.1 Commonly used React Events</h1>
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
      <h1>10.2 Method Binding</h1>
      <WiseSquareWithProps />
      <h1>10.3 Alternate Binding with Class properties</h1>
      <ExperimentalSquare />
      <h1>10.4 Bind with Arguments</h1>
      <ButtonList />
    </div>
  );
}

export default App;
