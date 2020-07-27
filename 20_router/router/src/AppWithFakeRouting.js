import React from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { page: "about" }; // Default page - about
  }
  changePage(newPage) {
    this.setState({ page: newPage });
  }
  renderPage(){
    if(this.state.page === 'about') return <About />
    else if(this.state.page === 'dog') return <Dog />
    else if(this.state.page === 'contact') return <Contact />
  }
  render(){
    return (
      <div className="App">
        <nav className='App-nav'>
          <a onClick={() => this.changePage("about")}>About</a>
          <a onClick={() => this.changePage("dog")}>Dog</a>
          <a onClick={() => this.changePage("contact")}>Contact</a>
        </nav>
        {/* <About />
        <Contact />
        <Dog /> */}
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
