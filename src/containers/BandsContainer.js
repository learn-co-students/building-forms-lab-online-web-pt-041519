import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
//<li>{b}</li>

class BandsContainer extends Component {
renderBands = () => this.props.bands.map( (b, i) => {console.log(b); return (<li key={i}>{b.name}</li>)})


  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
        {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: (band) => dispatch({
    type: 'ADD_BAND',
    band: band
  })
})
export default connect(state =>({bands: state.bands}), mapDispatchToProps)(BandsContainer)
