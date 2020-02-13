// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = { name: ''}

  handleChange = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand({name: this.state.name})
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input 
            name="name" 
            type="text" 
            onChange={ e => this.handleChange(e) } 
            placeholder="BandName"
            value={this.state.name}>
          </input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default BandInput
