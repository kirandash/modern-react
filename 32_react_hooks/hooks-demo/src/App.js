import React from 'react';

import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';

import './App.css';
import Toggler from './Toggler';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
      <Toggler/>
    </div>
  );
}

export default App;
