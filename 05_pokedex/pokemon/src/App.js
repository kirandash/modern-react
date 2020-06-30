import React from 'react';
import PokeCard from './PokeCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <PokeCard
        id={4}
        name="Charmander"
        type="fire"
        exp={62}
      />
    </div>
  );
}

export default App;
