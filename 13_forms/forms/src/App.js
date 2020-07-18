import React from 'react';
import './App.css';
import Form from './Form';
import MultipleForm from './MultipleForm';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <h1>13.1 Intro to React Forms</h1>
      <Form />
      <h1>13.2 Forms with Multiple Inputs</h1>
      <MultipleForm />
      <h1>13.4 Passing data upwards</h1>
      <ShoppingList />
    </div>
  );
}

export default App;
