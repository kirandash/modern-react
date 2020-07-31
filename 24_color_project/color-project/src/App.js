import React from 'react';

import Palette from './Palette'
import seedPalletes from './seedPalletes'

function App() {
  return (
    <div className="App">
      <Palette {...seedPalletes[2]} />
    </div>
  );
}

export default App;
