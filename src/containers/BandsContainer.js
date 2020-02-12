import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  render() {
    // debugger;
    return(
      <div>
        <BandInput addBand={this.props.addBand}/> 
        <div>
          {this.props.bands.map( band => {
            return <li>{band.name}</li>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => {
      // debugger;
      dispatch({type: "ADD_BAND", name: band.name })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
