import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';

class BandsContainer extends Component {  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

// Make bands available as props
const mapStateToProps = ({ bands }) => ({ bands })

// Make addBand available as addBand
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

// Connect BandsContainer to store
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);