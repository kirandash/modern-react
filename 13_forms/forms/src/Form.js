import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        
        // default state
        this.state = { username: "" };

        // bind event handlers from render method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        // set state when input changes
        this.setState({ username: evt.target.value });
    }
    handleSubmit(evt) {
        // on submitting form
        evt.preventDefault(); // To avoid default behavior of submitting form (No more reload)
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: "" });
    }
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button>Submit!</button>
                </form>
            </div>
        );
    }
}

export default Form;
