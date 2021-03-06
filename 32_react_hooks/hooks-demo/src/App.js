import React from 'react';

import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';

import './App.css';
import Toggler from './Toggler';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHooks from './SimpleFormInputHooks'
import Clicker from './Clicker';
import SWMovies from './SWMovies';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
      <Toggler/>
      <h1>32.3 Building a Custom Hook useInputState</h1>
      <SimpleFormClass />
      <h1>Form input with hooks</h1>
      <SimpleFormHooks />
      <h1>Form input with reusable hooks</h1>
      <SimpleFormInputHooks />
      <h1>32.4 useEffect Hook</h1>
      <Clicker />
      <h1>32.5 Fetching data w the useEffect hook</h1>
      <SWMovies />
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
