import React, { Component } from 'react'

class Game extends Component {
    
    state = {
        score: 25,
        gameOver: false
    } // State initialization with class properties proposal

    render() {
        return (
            <div>
                <h1>Your scrore in game 2 is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game

// Invalid JS class - won't work without babel, check how it is compiled by babel @ https://babeljs.io/repl
// class Game {
//     state = {
//         score: 25,
//         gameOver: false
//     } 
// }
