import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props){
        super(props);
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this.transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
        console.log(this.transform);
    }
    render() {
        // Note: Render is not the right place to set these variables because 
        // let angle = Math.random() * 90 - 45;
        // let xPos = Math.random() * 40 - 20;
        // let yPos = Math.random() * 40 - 20;
        // let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
        // console.log(transform);
        return (
            <img style={{ transform: this.transform }} className="Card" src={this.props.image} alt={this.props.name} />
        )
    }
}

export default Card
