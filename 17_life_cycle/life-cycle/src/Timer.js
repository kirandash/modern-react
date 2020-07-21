import React, { Component } from 'react'

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = { time: new Date() }
        console.log("IN CONSTRUCTOR!");
    }
    componentDidMount(){
        console.log("IN COMPONENT DID MOUNT!");
        this.timerID = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000); // Will update state and thus will call render method again
    }
    render() {
        console.log("IN RENDER!");
        return (
            <div>
                <h1>Timer</h1>
                <h2>{this.state.time.getSeconds()}</h2>
            </div>
        )
    }
}

export default Timer
