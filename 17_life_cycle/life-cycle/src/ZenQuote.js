import React, { Component } from 'react'
import axios from 'axios'

class ZenQuote extends Component {
    constructor(props){
        super(props);
        this.state = { quote: "", isLoaded: false }
    } // called first then render then componentDidMount and then if any update happens, render will be called again
    componentDidMount(){
        // load data
        axios.get("https://api.github.com/zen").then(response => {
            console.log(response);
            setTimeout(function(){
                this.setState({ quote: response.data, isLoaded: true }); // Note: if state is not defined: it will throw error because render is called once before componentDidMount
            }.bind(this), 3000);
        });
        // set state with that data
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? 
                (
                <div>
                    <h1>Always remember...</h1>
                    <p>{this.state.quote}</p>
                </div>
                ) : 
                (
                    <div className="loader">Loading...</div>
                )}
            </div>
        )
    }
}

export default ZenQuote
