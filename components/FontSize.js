import "../App.css";
import { Component } from "react";

export default class FontSize extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 12,
    };
    this.fontGrow = this.fontGrow.bind(this);
    this.fontShrink = this.fontShrink.bind(this);
  }

  fontGrow() {
    this.setState((prevState) => ({
      fontSize:
        prevState.fontSize + 5 < 100
          ? prevState.fontSize + 5
          : prevState.fontSize,
    }));
  }

  fontShrink() {
    this.setState((prevState) => ({
      fontSize:
        prevState.fontSize - 5 > 5
          ? prevState.fontSize - 5
          : prevState.fontSize,
    }));
  }

  render() {
    return (
      <div className="FontSize">
        <h1 style={{ fontSize: `${this.state.fontSize}px` }}>
          {this.state.fontSize}px
        </h1>
        <button onClick={this.fontShrink}>Shrink</button>
        <button onClick={this.fontGrow}>Grow</button>
      </div>
    );
  }
}
