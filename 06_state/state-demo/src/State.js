import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 25,
            gameOver: false
        } // State initialization
        this.state.score = 45; // Never directly change the state
        // this.setState({ score: 50 }); //  Can't call setState on a component that is not yet mounted
    }

    render() {
        return (
            <div>
                <h1>6.7 Setting state correctly</h1>
                <h1>Your scrore is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game
