import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {

    let allBands = []

    if (this.props.bands && this.props.bands.map){
      allBands = this.props.bands.map(band => <li>{band.name}</li>)
    }

    return(
      <div>
        BandsContainer
        <BandInput addBand = {this.props.addBand}/>
        <ul>{allBands}</ul>
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
  return { bands: state.bands}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
