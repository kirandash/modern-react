import React, { Component } from 'react'
import './PokeCard.css';

const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// img path: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/id.png

class PokeCard extends Component {
    render() {
        let imgSrc = `${PokeAPI}${this.props.id}.png`;
        return (
            <div className="PokeCard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                {/* alt: for screen readers and for times when img doesn't load for some reason on browser */}
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default PokeCard
