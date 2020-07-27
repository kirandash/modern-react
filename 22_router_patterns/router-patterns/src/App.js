import React from 'react';
import { Route } from 'react-router-dom';
import Food from './Food';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/food/:name' render={() => <Food name='egg' />} /> */}
      {/* <Route exact path='/food/:name' render={routeProps => <Food name='egg' stuff={routeProps} />} /> */}
      {/* <Route exact path='/food/:name' render={routeProps => <Food name={routeProps.match.params.name} />} /> */}
      {/* <Route exact path='/food/:name' render={routeProps => <Food {...routeProps} />} /> */}
      {/* <Route exact path='/food/:name' component={Food} /> */}
      <Route exact path='/food/:name' render={routeProps => <Food authenticated={true} {...routeProps} />} />
    </div>
  );
}

export default App;
