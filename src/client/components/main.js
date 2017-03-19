import React, { PropTypes } from 'react';
import Breweries from './breweries';


const Main = props => (
  <div className="homeContainer">
    <Breweries breweries={props.breweries} />
  </div>
);

Main.propTypes = {
  breweries: PropTypes.array.isRequired,
}

export default Main;
