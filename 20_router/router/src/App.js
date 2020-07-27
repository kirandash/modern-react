import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dog" component={Dog} />
          <Route exact path="/dog/hater" component={Hater} />
        </Switch>
      </div>
    );
  }
}

export default App;
