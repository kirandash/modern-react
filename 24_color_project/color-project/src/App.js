import React from 'react';

import Palette from './Palette'
import seedPalletes from './seedPalletes'
import { generatePalette } from './colorHelpers';

function App() {
  // console.log(generatePalette(seedPalletes[2]));
  return (
    <div className="App">
      {/* <Palette {...seedPalletes[2]} /> */}
      <Palette palette={generatePalette(seedPalletes[2])} />
    </div>
  );
}

export default App;
