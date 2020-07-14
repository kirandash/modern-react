import React from 'react';
import './App.css';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import WiseSquareWithProps from './WiseSquareWithProps';

function App() {
  return (
    <div className="App">
      <h1>10.1 Commonly used React Events</h1>
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
      <h1>10.2 Method Binding</h1>
      <WiseSquareWithProps />
    </div>
  );
}

export default App;
