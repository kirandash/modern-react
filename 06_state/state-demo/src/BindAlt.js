import React, { Component } from 'react'

class BindAlt extends Component {
    // constructor(props){
        // super(props);
        // this.state = {clicked: false}
        // without the below line: handleClick will be out of context
        // this.handleClick = this.handleClick.bind(this); // setting context of handleClick by binding to this. Where, this is the current context of the component
    // }
    
    // Creating state using class properties (babel - not real JS. So, invalid code if babel is not configured)
    state = { clicked: false }

    // Binding method using class properties (babel - not real JS. So, invalid code if babel is not configured)
    handleClick = (e) => {
        this.setState({
            clicked: true
        });
    } // Babel compiles and automatically binds it to current component instance

    // handleClick(e) {
    //     this.setState({
    //         clicked: true
    //     });
    // }

    render() {
        return (
            <div>
                <h1>6.9 Click events in React - Alternate Syntax</h1>
                <h3>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h3>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default BindAlt
