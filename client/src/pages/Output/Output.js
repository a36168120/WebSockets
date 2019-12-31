import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: socketIOClient("http://127.0.0.1:4000"),
      mouseX: 0,
      mouseY: 0,
      backgroundColor: "white"
    };
  }
  render() {
    this.state.socket.on("Output mouse data", mouseData => {
      this.setState({ mouseX: mouseData.mouseX, mouseY: mouseData.mouseY });
    });

    this.state.socket.on("Output change color", color => {
      document.body.style.backgroundColor = color;
      this.setState({ backgroundColor: color });
    });

    const styles = {
      mouseBoxStyle: {
        left: this.state.mouseX - 25,
        top: this.state.mouseY - 25
      }
    };

    return (
      <div>
        <p>X: {this.state.mouseX}</p>
        <p>Y: {this.state.mouseY}</p>

        <div className="mouseBox" style={styles.mouseBoxStyle}></div>
      </div>
    );
  }
}

export default Output;
