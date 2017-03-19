import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navbar';

class AppContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <NavBar />
        {children}
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = ({ breweries }) => ({
  breweries: breweries.breweries,
});

export default connect(mapStateToProps)(AppContainer);
