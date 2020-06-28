import React, { Component } from 'react';
import DogImg from './100.png';
import './Dog.css'; // .css extension must be mentioned unlike JS where .js is not required

class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <h1 className="Dog-title">Dog!</h1>
                <p className="Dog-description">Some dog related text here</p>
                <img className="Dog-img" src={DogImg} />
            </div>
        )
    }
}

export default Dog
