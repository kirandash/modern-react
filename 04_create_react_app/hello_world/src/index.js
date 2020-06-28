import React from 'react'; // will look for react folder in node_modules directory
import ReactDOM from 'react-dom'; // will look for react-dom folder in node_modules directory
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Importing modules that are exported by default
import h from './helpers'; // will look for helpers.js file in current directory(src)
// Default fns can be given any alias while importing

// Importing modules that are not exported by default
import { welcome, sort, add as myAdd} from './utils'; // non default fns must maintain the same name and can add alias if you want using 'as' keyword

// Importing combination of default + non default fns
import myA, { b as myB, c, d } from './functions'; // Default fns can be given any alias while importing, non default fns must maintain the same name and can add alias if you want using 'as' keyword

import allFoods from './foods/foods';
import { choice, remove } from './foods/helpers';

h(); // calls helpful fn since that is the default export
welcome();
sort();
myAdd();
myA();
myB();
c();
d();

// 1 - Randomly pick a food from the foods array
let food = choice(allFoods);
console.log(`Today's lunch is: ${food}`);

// 2 - Remove the picked fruit from the foods array
let remainingFoods = remove(allFoods, food);
console.log(`We have ${remainingFoods.length} food left.`)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
