import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 2, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this); // binding in constructor instead of render is better since it won't create a new fn with every render
  }

  remove(num) {
    console.log("REMOVING!");
    console.log(num);
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    // Key must be unique!
    let nums = this.state.nums.map((n, idx) => (
      // Without key, while removing 2, all 2s will be removed
      // <BetterNumberItem value={n} remove={this.remove} />
      // <BetterNumberItem key={idx} value={n} remove={this.remove} />
      <BetterNumberItem key={n} value={n} remove={this.remove} />
    ));
    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
