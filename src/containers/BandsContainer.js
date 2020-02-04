import React, { Component } from 'react'
import { addBand } from '../reducers/manageBand'
import { connect } from 'react-redux';
import  BandInput  from '../components/BandInput'
import Bands from '../components/Bands'
class BandsContainer extends Component {
  render() {
    const { bands, addBand } = this.props;
    console.log(bands)
    return(
      <div>
        BandsContainer
        <BandInput addBand={addBand} />
        
        <Bands bands={bands} /> 
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return { addBand: (band)=> { return dispatch({type: 'ADD_BAND', band})}}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
