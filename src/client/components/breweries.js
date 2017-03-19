import React, { PropTypes } from 'react';

const Breweries = ({ breweries }) => (
  <div>
    {breweries.map(brewery => (
      <div>{brewery.name}</div>
    ))}
  </div>
);

Breweries.propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breweries;
