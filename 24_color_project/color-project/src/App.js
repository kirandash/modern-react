import React from 'react';
import { Route, Switch } from "react-router-dom";

import Palette from './Palette'
import seedPalletes from './seedPalletes'
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';

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
          {/* Palette List does not need generated color. Only the seed palettes is enough */}
          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteList palettes={seedPalletes} {...routeProps} />
            )}
          />
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
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={() => <h1>SINGLE COLOR PAGE!</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
