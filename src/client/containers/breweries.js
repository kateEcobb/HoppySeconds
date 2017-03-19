import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class BreweriesContainer extends Component {
  render() {
    const { breweries } = this.props;

    return (
      <div>
        {/* {breweries.map(brewery => (
          <div>{brewery.name}</div>
        ))} */}
      </div>
    );
  }
}

BreweriesContainer.propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ breweries: state }) => ({ breweries: state.breweries });

export default connect(mapStateToProps)(BreweriesContainer);
