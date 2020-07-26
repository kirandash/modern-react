import React, { Component } from 'react'
import axios from 'axios'

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props){
        super(props);
        this.state = { jokes: [] };
    }
    async componentDidMount() {
        // Load jokes
        let jokes = [];
        while(jokes.length < this.props.numJokesToGet){
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: 'application/json' }
            })
            jokes.push(res.data.joke)
        } // while loop not for loop
        this.setState({ jokes: jokes })
        console.log(jokes)
    }
    render() {
        return (
            <div className="JokeList">
                <h1>Joke List</h1>
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <div>
                            {j}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList
