// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    // create an object from state
    const band = {...this.state}

    // now pass the band object to the action creator
    this.props.addBand(band)

    // return the state back to its default value of a blank string  
    this.setState({
      name: ''
    })


  }

  // function for updating the state everytime the input band changes
  handleFieldChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="band" className="col-md-4 control-label">Band Name</label>
            <div className="col-md-5">
              <input
                className="form-control"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleFieldChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <button type="submit" className="btn btn-primary">Add Band</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BandInput
