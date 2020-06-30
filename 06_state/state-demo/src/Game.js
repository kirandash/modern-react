import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 25,
            gameOver: false
        } // State initialization
    }

    render() {
        return (
            <div>
                <h1>Your scrore is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game
