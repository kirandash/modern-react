import React, { Component } from 'react'
import axios from "axios"

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "",
            name: ""
        }; // Best practice to initialize all state properties in constructor to avoid initial null occurrence in render
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        console.log(response)
        let data = response.data;
        this.setState({ imgUrl: data.avatar_url, name: data.name })
    }
    render() {
        return (
            <div>
                <h1>GitHub user info</h1>
                <p>User: {this.state.name}</p>
                <img src={this.state.imgUrl} width="100" />
            </div>
        )
    }
}

export default GithubUserInfo
