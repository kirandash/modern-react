import React from 'react';
import { Route, Switch } from "react-router-dom";

import Palette from './Palette'
import seedPalletes from './seedPalletes'
import { generatePalette } from './colorHelpers';

function App() {
  // console.log(generatePalette(seedPalletes[2]));
  return (
    <div className="App">
      {/* <Palette {...seedPalletes[2]} /> */}
      {/* <Palette palette={generatePalette(seedPalletes[2])} /> */}
      <Switch>
        <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={() => <h1>INDIVIDUAL PALETTE</h1>}
        />
      </Switch>
    </div>
  );
}

export default App;
