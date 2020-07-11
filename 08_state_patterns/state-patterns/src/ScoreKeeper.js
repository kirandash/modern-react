import React, { Component } from 'react'

class ScoreKeeper extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0
        }
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
        this.tripleKillCb = this.tripleKillCb.bind(this);
        this.tripleKillRf = this.tripleKillRf.bind(this);
    }
    singleKill() {
        this.setState({ score: this.state.score + 1 })
    }
    tripleKill() {
        this.setState({ score: this.state.score + 1 })
        this.setState({ score: this.state.score + 1 })
        this.setState({ score: this.state.score + 1 }) // last line will execute
        // This will add only +1 instead of +3. Bcoz React will batch them together as single setState. 
        // Since all three line looks similar to React, it will take the last line and enact that
    }
    tripleKillCb() {
        // Update existing state the right way with callback
        this.setState(st => {return { score: st.score + 1 }});
        this.setState(st => ({ score: st.score + 1 }));
        this.setState(st => {return { score: st.score + 1 }});
    }
    incrementScore(curState) {
        return { score: curState.score + 1 }
    }
    tripleKillRf() {
        // Refactored code
        this.setState(this.incrementScore)
        this.setState(this.incrementScore)
        this.setState(this.incrementScore)
    }
    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                {/* <button onClick={this.tripleKill}>Triple Kill!</button> */}
                {/* <button onClick={this.tripleKillCb}>Triple Kill!</button> */}
                <button onClick={this.tripleKillRf}>Triple Kill!</button>
            </div>
        )
    }
}

export default ScoreKeeper
