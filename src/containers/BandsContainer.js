import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import {addBand} from '../actions/BandActions'


class BandsContainer extends Component {

  
  render() {
    const {addBand, bands} = this.props
    return(
      <div>
        <BandInput addBand={addBand}/>
        <ul>
          {bands.map( band => <li key={band.name}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

export default connect(mapStateToProps, {addBand})(BandsContainer)
