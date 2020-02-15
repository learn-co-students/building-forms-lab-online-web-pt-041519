import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand = {this.props.addBand}/>
        {this.props.bands.map(band => { return <li key={band.name}>{band.name}</li> })}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
    {
      addBand: (band) => {
        dispatch({
          type: 'ADD_BAND',
          band: band
        })
      }
    }
  )
}

const mapStateToProps = (state) => {
  return { bands: state.bands } 
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
