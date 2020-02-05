import React, { Component } from "react";

class Techlist extends Component {
  state = {
    techs: ["NodeJS", "ReactJS", "React Native"]
  };
  render() {
    console.log(this.state);
    return (
      <ul>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>MongoDB</li>
      </ul>
    );
  }
}

export default Techlist;
