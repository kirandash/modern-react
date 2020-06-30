import React, { Component } from 'react'
import './Pokecard.css';

const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// img path: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/id.png

class Pokecard extends Component {
    render() {
        let imgSrc = `${PokeAPI}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                {/* alt: for screen readers and for times when img doesn't load for some reason on browser */}
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard
