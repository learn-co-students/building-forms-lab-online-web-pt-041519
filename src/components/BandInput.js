// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.name);
    this.props.addBand(this.state);
    // console.log("this.state.input");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="something"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default BandInput;
