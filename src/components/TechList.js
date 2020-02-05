import React, { Component } from "react";

class Techlist extends Component {
  state = {
    newTech: "",
    techs: ["NodeJS", "ReactJS", "React Native"]
  };
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    //previne o recarregamento da view
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech] });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Techlist;
