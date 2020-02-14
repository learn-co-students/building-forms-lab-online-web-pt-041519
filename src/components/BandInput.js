// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleOnChange = event => {
    // handle updating state
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    // create band object from state
    event.preventDefault()
    const band = {...this.state}
    // pass band object to action creator
    this.props.addBand(band)
     // Update component state to return to default state
     this.setState = {
       name: ""
     }
  }

  render() {
    return(
      <div>
        <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="band" className="col-md-4 control-label">Band</label>
              <div className="col-md-5">
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleOnChange}
                />
              </div>
          </div>
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <button type="submit" className="btn btn-default">Add Band</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BandInput;
