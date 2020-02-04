// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ""
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value,
    });

  }

  handleOnSubmit = event => {
    event.preventDefault()
    const band = this.state
    console.log(band)
    this.props.addBand(band)
    this.setState({
      name:""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}> 
          <label> Band Input </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
          <button type="submit">add band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
