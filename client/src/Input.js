import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      socket: socketIOClient("http://127.0.0.1:4000"),
      color: "red",
      mouseX: 0,
      mouseY: 0,
      lastCheck: new Date().getTime()
    };
  }

  send = () => {
    this.state.socket.emit("Input change color", this.state.color); // change 'red' to this.state.color
  };

  mouseMove = event => {
    // console.log("X:", event.pageX);
    // console.log("Y:", event.pageY);
    // this.setState({ mouseX: event.pageX });
    // this.setState({ mouseY: event.pageY });

      // console.log(new Date().getTime() - this.state.lastCheck)
      // if (new Date().getTime() - this.state.lastCheck >= 100) {
      //     this.state.socket.emit("Input", {
      //         mouseX: event.pageX,
      //         mouseY: event.pageY
      //     });
      //     this.setState({ lastCheck: new Date().getTime()});
      // }

  };

  render() {
    this.state.socket.on("Output change color", color => {
      // document.body.style.backgroundColor = color;
      this.setState({ color: color });
    });

    const styles = {
      mouseBoxStyle: {
        left: this.state.mouseX - 25,
        top: this.state.mouseY - 25
      }
    };

    return (
      <div className="container" onMouseMove={event => this.mouseMove(event)}>
        <button className="button" onClick={() => this.send()}>
          Socket Test
        </button>
        <p>X: {this.state.mouseX}</p>
        <p>Y: {this.state.mouseY}</p>

        {/* <div className="mouseBox" style={styles.mouseBoxStyle}></div> */}
      </div>
    );
  }
}

export default Input;
