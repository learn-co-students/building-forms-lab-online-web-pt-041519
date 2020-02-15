import React, { Component } from "react";
import BandInput from "../components/BandInput";
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    console.log(this.props);
    const { bands } = this.props;
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {bands.map((band, index) => (
            <li key={index}>{band.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bands: state.bands };
};
// const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
