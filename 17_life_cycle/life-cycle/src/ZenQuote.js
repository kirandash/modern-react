import React, { Component } from 'react'
import axios from 'axios'

class ZenQuote extends Component {
    constructor(props){
        super(props);
        this.state = { quote: "" }
    } // called first then render then componentDidMount and then if any update happens, render will be called again
    componentDidMount(){
        // load data
        axios.get("https://api.github.com/zen").then(response => {
            console.log(response);
            this.setState({ quote: response.data }) // Note: if state is not defined: it will throw error because render is called once before componentDidMount
        });
        // set state with that data
    }
    render() {
        return (
            <div>
                <h1>Always remember...</h1>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}

export default ZenQuote
