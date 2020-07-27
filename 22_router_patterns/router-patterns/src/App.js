import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';

import './App.css';
import Meal from './Meal';
import FoodSearch from './FoodSearch';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path='/food/:name' render={() => <Food name='egg' />} /> */}
        {/* <Route exact path='/food/:name' render={routeProps => <Food name='egg' stuff={routeProps} />} /> */}
        {/* <Route exact path='/food/:name' render={routeProps => <Food name={routeProps.match.params.name} />} /> */}
        {/* <Route exact path='/food/:name' render={routeProps => <Food {...routeProps} />} /> */}
        {/* <Route exact path='/food/:name' component={Food} /> */}
        {/* use render if additional props are to be sent with routeProps */}
        <Route exact path="/" render={(routeProps) => <FoodSearch {...routeProps} />} />
        {/* <Route exact path="/" component={FoodSearch} /> */}
        <Route
          exact
          path='/food/:name'
          render={routeProps => <Food authenticated={true} {...routeProps} />}
        />
        {/* No need to use render below since url params are sent by default in props */}
        <Route
          exact
          path='/food/:foodName/drink/:drinkName'
          component={Meal}
        />
        <Route exact render={() => <h1>ERROR NOT FOUND!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
