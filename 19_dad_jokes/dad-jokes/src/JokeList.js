import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'uuid/v4'

import "./JokeList.css";
import Joke from './Joke';

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
        super(props);
        this.state = { 
            jokes: JSON.parse(window.localStorage.getItem('jokes')) || [],
            loading: false
        };
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        console.log(this.seenJokes)
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes();
    }
    async getJokes() {
        try{
            // Load jokes
            let jokes = [];
            while (jokes.length < this.props.numJokesToGet) {
                let res = await axios.get("https://icanhazdadjoke.com/", {
                    headers: { Accept: 'application/json' }
                })
                let newJoke = res.data.joke;
                if(!this.seenJokes.has(newJoke)){
                    jokes.push({ id: uuid(), text: newJoke, votes: 0 })
                }else{
                    console.log("FOUND A DUPLICATE!");
                    console.log(newJoke)
                }
            } // while loop not for loop
            this.setState(st => ({ 
                loading: false,
                jokes: [...st.jokes, ...jokes]
            }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
            );
            // console.log(jokes)
            // window.localStorage.setItem("jokes", JSON.stringify(jokes))
        }catch(err){
            alert(err);
            this.setState({ loading: false })
        }
    }
    handleVote (id, delta) {
        this.setState(st => ({
            jokes: st.jokes.map(j => j.id === id ? {...j, votes: j.votes + delta} : j)    
        }),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)) // to retain votes in localStorage
        )
    }
    handleClick () {
        this.setState({ loading: true }, this.getJokes)
        // this.getJokes()
    }
    render() {
        if(this.state.loading){
            return (
                <div className="JokeList-spinner">
                    <i className="far fa-8x fa-laugh fa-spin"></i>
                    <h1 className="JokeList-title">Loading...</h1>
                </div>
            )
        }
        // sort jokes based on votes
        let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className='JokeList-getmore' onClick={this.handleClick}>
                        Fetch Jokes
                    </button>
                </div>
                <div className="JokeList-jokes">
                    {jokes.map(j => (
                        <Joke 
                            key={j.id} 
                            text={j.text} 
                            votes={j.votes} 
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList
