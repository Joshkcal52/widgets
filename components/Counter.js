import "../App.css";
import { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.countAdd = this.countAdd.bind(this);
    this.countMinus = this.countMinus.bind(this);
  }

  countAdd() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  countMinus() {
    this.setState((prevState) => ({
      count: prevState.count > 1 ? prevState.count - 1 : prevState.count,
    }));
  }

  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.countMinus}>Subtract</button>
        <button onClick={this.countAdd}>Add</button>
      </div>
    );
  }
}
