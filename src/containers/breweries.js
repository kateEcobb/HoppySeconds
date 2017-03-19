import React, { Component, PropTypes } from 'react';
// import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../actions/index';

class BreweriesContainer extends Component {
  render() {
    return (
      <div> hello </div>
    );
  }
}

const mapStateToProps = ({ breweries }) => ({ breweries });

export default connect(mapStateToProps)(BreweriesContainer);
