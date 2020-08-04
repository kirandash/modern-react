import React from 'react';
import { Route, Switch } from "react-router-dom";

import Palette from './Palette'
import seedPalletes from './seedPalletes'
import { generatePalette } from './colorHelpers';

class App extends React.Component {
  findPalette(id) {
    return seedPalletes.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
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
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
