import React, { Component } from "react";
import brofist from "./assets/img/brofist.png";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import socketIOClient from "socket.io-client";

// const Home = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={brofist} className="App-logo" alt="logo" />
//       <p>The beginning of everything</p>
//       <Button />
//     </header>
//   </div>
// );
// const Input = () => <h1>Input</h1>;
// const Output = () => <h1>output</h1>;

// const NavBar = () => (
//   <div>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/input">Input</NavLink>
//     <NavLink to="/output">Output</NavLink>
//   </div>
// );

// const Button = () => <button onClick={() => this.send()}>Socket Test</button>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      socket: socketIOClient("http://127.0.0.1:4000"),
      color: "red"
    };
  }
  // componentDidMount() {
  //   // socket.on("FromAPI", data => this.setState({ response: data }));
  //   this.state.socket.emit("message", { data: "hi" });
  //   this.state.socket.on("message", data => console.log(data));
  // }

  send = () => {
    this.state.socket.emit("change color", this.state.color); // change 'red' to this.state.color
  };

  render() {
    this.state.socket.on("change color", color => {
      document.body.style.backgroundColor = color;
      this.state.color = color;
    });
    return (
      // <Router>
      //   <div>
      //     <NavBar />
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route path="/input" component={Input} />
      //       <Route path="/output" component={Output} />
      //     </Switch>
      //   </div>
      // </Router>
      <div>
        <button onClick={() => this.send()}>Socket Test</button>
      </div>
    );
  }
}

export default App;
