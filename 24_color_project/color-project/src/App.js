import React from 'react';
import { Route, Switch } from "react-router-dom";

import Palette from './Palette'
import seedPalletes from './seedPalletes'
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from './colorHelpers';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

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
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path='/palette/new'
                    render={routeProps => (
                      <div className='page'>
                        <NewPaletteForm
                          savePalette={this.savePalette}
                          palettes={this.state.palettes}
                          {...routeProps}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path='/palette/:paletteId/:colorId'
                    render={routeProps => (
                      <div className='page'>
                        <SingleColorPalette
                          colorId={routeProps.match.params.colorId}
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path='/'
                    render={routeProps => (
                      <div className='page'>
                        <PaletteList
                          palettes={this.state.palettes}
                          deletePalette={this.deletePalette}
                          {...routeProps}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path='/palette/:id'
                    render={routeProps => (
                      <div className='page'>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </div>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
