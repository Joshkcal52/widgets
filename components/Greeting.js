import { Component } from "react";
import "../App.css";

export default class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello",
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
    }));
  }

  render() {
    return (
      <div className="Greeting">
        <h2>{this.state.greeting}</h2>
        <button onClick={this.handleToggle}>Toggle Me</button>
      </div>
    );
  }
}
