import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  // Change state value
  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  // Create band objects
  handleOnSubmit = event => {
    event.preventDefault();

    // Create object from state
    const band = {...this.state};

    // Pass band object to action creator
    this.props.addBand(band)

    // Return component state to default
    this.setState({
      name: '',
    });
  }

  // Display band creation form with text input and submit button
  render() {
    return(
      <div>
        <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="band" className="col-md-4 control-label">Band Name</label>
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
              <button type="submit" className="btn btn-primary">Add Band</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BandInput