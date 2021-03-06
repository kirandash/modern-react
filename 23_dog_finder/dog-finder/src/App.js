import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Routes from './Routes'

import './App.css';

import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
// import DogList from './DogList';
// import DogDetails from './DogDetails';
import Navbar from './Navbar';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };

  render() {
    // const getDog = props => {
    //   // Fn to return current Dog based on route
    //   let name = props.match.params.name;
    //   let currentDog = this.props.dogs.find(
    //     dog => dog.name.toLowerCase() === name.toLowerCase()
    //   )
    //   return <DogDetails {...props} dog={currentDog} />
    // }
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        {/* <Switch>
          <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path='/dogs/:name' render={getDog} />
        </Switch> */}
        <div className='container'>
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
