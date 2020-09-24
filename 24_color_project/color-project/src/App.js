import React from 'react';
import { Route, Switch } from "react-router-dom";

import Palette from './Palette'
import seedPalletes from './seedPalletes'
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from "./SingleColorPalette";

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedPalletes };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    // console.log(generatePalette(seedPalletes[2]));
    return (
      <div className="App">
        {/* <Palette {...seedPalletes[2]} /> */}
        {/* <Palette palette={generatePalette(seedPalletes[2])} /> */}
        <Switch>
          {/* Must be before /palette/:id so that this match first. Order is important */}
          <Route
            exact
            path='/palette/new'
            render={routeProps => (
              <NewPaletteForm
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...routeProps}
              />
            )}
          />
          {/* Palette List does not need generated color. Only the seed palettes is enough */}
          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteList
                palettes={this.state.palettes}
                deletePalette={this.deletePalette}
                {...routeProps}
              />
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
            render={routeProps => (
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
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
