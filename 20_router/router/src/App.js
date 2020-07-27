import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/dog" component={Dog} />
      </div>
    );
  }
}

export default App;
