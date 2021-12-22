import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello My guys them",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <input
            type="text"
            className="collect"
            onChange={(e) => this.setState({ string: e.target.value })}
          />
          <button
            onClick={() =>
              this.setState({
                string: "wait first make i check something",
              })
            }
          >
            Change State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
