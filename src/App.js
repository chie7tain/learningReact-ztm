import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  async componentDidMount() {
    let data = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    this.setState({
      monsters: data,
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div key={monster.id} className="monster-card">
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
