import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    // debugger;
    return(
      <div>
        <BandInput addBand={this.props.addBand}/> 
        <ul>
          {this.props.bands.map( band => {
            <li>{band.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    addBand: bandName => {
      dispatch({type: "ADD_BAND", name: bandName })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
