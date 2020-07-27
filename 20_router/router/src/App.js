import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom'

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
          {/* <Link to="/">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dog">Dog</Link> */}
          <NavLink exact activeClassName="active-link" to="/">About</NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
          {/* <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink> */}
          <NavLink exact activeClassName="active-link" to="/dog/c">Dog(c)</NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/r">Dog(r)</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/dog" component={Dog} /> */}
          <Route exact path="/dog/c" component={() => <Dog name='Stella' />} />
          <Route exact path="/dog/r" render={() => <Dog name='Zimmy' />} />
          <Route exact path="/dog/hater" component={Hater} />
        </Switch>
      </div>
    );
  }
}

export default App;
