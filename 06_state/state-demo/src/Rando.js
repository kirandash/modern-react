import React, { Component } from 'react'

class Rando extends Component {
    constructor(props){
        super(props);
        this.state = { num: 0, color: 'red' };
        this.makeTimer();
    }

    makeTimer(){
        setInterval(()=>{
            let rand = Math.floor(Math.random() * this.props.maxNum); // random no b/w 0 and maxNum
            this.setState({num: rand});
        },1000);
    }

    render() {
        console.log('Rendering!')
        return (
            <div>
                <h1>How to set state correctly - Demo</h1>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}

export default Rando
