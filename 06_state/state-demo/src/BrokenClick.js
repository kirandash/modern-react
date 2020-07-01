import React, { Component } from 'react'

class BrokenClick extends Component {
    constructor(props){
        super(props);
        this.state = {clicked: false}
        // without the below line: handleClick will be out of context
        this.handleClick = this.handleClick.bind(this); // setting context of handleClick by binding to this. Where, this is the current context of the component
    }

    handleClick(e) {
        this.setState({
            clicked: true
        });
    }

    render() {
        return (
            <div>
                <h1>6.8 Click events in React</h1>
                <h3>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h3>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default BrokenClick
