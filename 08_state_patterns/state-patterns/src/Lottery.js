import React, { Component } from 'react'
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props);
        // this.state = {nums: []}
        this.state = {nums: Array.from({length: this.props.numBalls})} // creates array with 6 empty items
        this.handleClick = this.handleClick.bind(this);
    }
    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        })); // always update state using callback and making a copy
    }
    handleClick(){
        // standard way of naming events: handleEventname and then call the function
        this.generate();
    }
    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map((n, idx)=> (
                        <Ball key={idx} num={n} />
                    ))}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery
