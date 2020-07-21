import React from 'react';
import './App.css';
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      <h1>17.1 componentDidMount</h1>
      <Timer />
      <h1>17.2 Load data via AJAX</h1>
      <ZenQuote />
      <h1>17.2 Load data via AJAX</h1>
      <GithubUserInfo username='facebook' />
      <GithubUserInfo username='kirandash' />
    </div>
  );
}

export default App;
