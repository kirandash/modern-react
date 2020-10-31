import {useReducer} from 'react'
import './App.css';

function countReducer(state, action){
  // Scenarios
  switch(action.type) {
    case "INCREMENT":
      return {count: state.count + action.amount};
    case "DECREMENT":
      return {count: state.count - action.amount};
    case "RESET":
      return {count: 0};
    default:
      break;
  } // Switch 
}

// {type: 'INCREMENT'}
// {type: 'DECREMENT'}

function App() {
  const [state, dispatch] = useReducer(countReducer, {count: 0});
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT', amount: 1})}>Add 1</button>
      <button onClick={() => dispatch({type: 'INCREMENT', amount: 5})}>Add 5</button>
      <button onClick={() => dispatch({type: 'DECREMENT', amount: 1})}>Subtract 1</button>
      <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </div>
  );
}

export default App;
