import { Component } from "react";
import "../App.css";

export default class Hide extends Component {
  constructor() {
    super();
    this.state = {
      hideText: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      hideText: !prevState.hideText,
    }));
  }

  render() {
    return (
      <div className="Hide">
        {/* <h2>{this.state.hideText ? "Show" : "Hide"}</h2> */}
        {this.state.hideText ? <p>Hide Me</p> : null}
        <button onClick={this.handleToggle}>
          {this.state.hideText ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
