import React, { PropTypes } from 'react';
import BreweryView from './brewery';

const Breweries = ({ breweries }) => (
  <div>
    {breweries.map(brewery => (
      <BreweryView brewery={brewery.brewery} key={brewery.brewery.id} />
    ))}
  </div>
);

Breweries.propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breweries;
