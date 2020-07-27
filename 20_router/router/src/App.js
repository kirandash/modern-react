import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav className="App-nav">
          {/* <a href="/">About</a>
          <a href="/contact">Contact</a>
          <a href="/dog">Dog</a> */}
          <Link to="/">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dog">Dog</Link>
        </nav>
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
