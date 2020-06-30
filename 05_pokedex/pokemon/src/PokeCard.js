import React, { Component } from 'react'
import './Pokecard.css';

// Pokemon sprites - low quality
// const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// img path: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/id.png

// Pokemon images - high quality (3 digit format)
const PokeAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// img path: https://assets.pokemon.com/assets/cms2/img/pokedex/detail/id.png

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number); // If number is lt 1000, Add 2 zeroes and slice last 3 digits. Ex: 3 ---> 003, 45 ---> 0045 ---> 045, 115 ---> 00115 ---> 115

class Pokecard extends Component {
    render() {
        let imgSrc = `${PokeAPI}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                {/* alt: for screen readers and for times when img doesn't load for some reason on browser */}
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard
