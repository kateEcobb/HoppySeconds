import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Breweries from './breweries';
import SearchBar from './search_bar';

class Home extends Component {

  render() {
    const { breweries } = this.props;
    return (
      <div id="mainContainer">
        <div className="searchBar">
          <SearchBar />
        </div>
        <Breweries breweries={breweries} />
      </div>
    );
  }
}
Home.propTypes = {
  breweries: PropTypes.array.isRequired,
};

const mapStateToProps = ({ breweries }) => ({
  breweries,
});

export default connect(mapStateToProps)(Home);
