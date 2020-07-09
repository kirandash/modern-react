import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props){
        super(props); // Not reqd if we don't need to access props in constructor
        this.state = { num: 1 };
        this.genRandom = this.genRandom.bind(this); // to set scope for genRandom fn
    }
    genRandom() {
        // pick random number 1-10
        let rand = Math.floor(Math.random() * 10) + 1;
        // update state with new number
        this.setState({ num: rand });
    }
    render() {
        return (
            <div>
                <h1>6.10 Clicker</h1>
                <h2>The number is: {this.state.num}</h2>
                {this.state.num === 7 
                    ? <h3>You Win!</h3>
                    : <button onClick={this.genRandom}>Generate number</button>
                }
            </div>
        )
    }
}

export default Clicker
