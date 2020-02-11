import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    // debugger
    // console.log(this.props.store.getState())
    return (
      <div className="App">
        <BandsContainer bands={this.props.bands}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(App);

// export default App