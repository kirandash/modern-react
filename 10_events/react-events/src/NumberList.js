import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] }; // default set of numbers
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    })); // best practice to use callback and modify the copy with filter
  }

  render() {
    let nums = this.state.nums.map((n, idx) => (
      <NumberItem key={idx} value={n} remove={() => this.remove(n)} />
    ));
    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;
