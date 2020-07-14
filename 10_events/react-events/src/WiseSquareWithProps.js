import React, { Component } from "react";

class WiseSquareWithProps extends Component {
  constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this); // To bind event handler to the instance of component
  }
  static defaultProps = {
    messages: [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ]
  };

  dispenseWisdom() {
    console.log("THIS IS...", this);
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <React.Fragment>
        {/* <div className='WiseSquare' onMouseEnter={this.dispenseWisdom.bind(this)}>
          😃
        </div> */}
        {/* <div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom()}>
          😃
        </div> */}
        <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
          😃
        </div>
      </React.Fragment>
    );
  }
}

export default WiseSquareWithProps;
