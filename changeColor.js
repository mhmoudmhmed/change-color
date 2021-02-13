import React, { Component } from "react";

class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      green: false,
      redColor: "red",
      blueColor: "blue",
      greenColor: "green",
    };
  }

  changeToRed = () => {
    this.setState({
      red: true,
    });
  };
  changeToblue = () => {
    this.setState({
      blue: true,
    });
  };
  changeToGreen = () => {
    this.setState({
      green: true,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.changeToRed}> click me </button>
        <button onClick={this.changeToblue}> click me </button>
        <button onClick={this.changeToGreen}> click me </button>
        {this.state.red ? (
          <div
            style={{ background: this.state.redColor, width: 500, height: 500 }}
          />
        ) : this.state.blue ? (
          <div
            style={{
              background: this.state.blueColor,
              width: 500,
              height: 500,
            }}
          />
        ) : (
          <div
            style={{
              background: this.state.greenColor,
              width: 500,
              height: 500,
            }}
          />
        )}
      </>
    );
  }
}

export default ChangeColor;
