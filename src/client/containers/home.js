import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as BeerActions from '../actions/index';
import Main from '../components/main';
import SearchBar from './search_bar';

class Home extends Component {
  componentDidMount() {
    const { breweries, dispatch } = this.props;

    if (breweries.length === 0) dispatch(BeerActions.fetchBeer());
  }

  render() {
    const { breweries } = this.props;
    return (
      <div id="mainContainer">
        <div className="searchBar">
          <SearchBar />
        </div>
        <Main breweries={breweries} />
      </div>
    );
  }
}
Home.propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

Home.defaultProps = {
  breweries: [],
};

const mapStateToProps = ({ breweries }) => ({
  breweries: breweries.breweries,
});

export default connect(mapStateToProps)(Home);
