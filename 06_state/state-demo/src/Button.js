import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <div>
                <h1>6.8 Click events in React</h1>
                <button onClick={function(){
                    alert('Clicked')
                }}>Click me</button>
            </div>
        )
    }
}

export default Button
