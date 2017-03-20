import React, { PropTypes } from 'react';

const Brewery = ({ brewery }) => (
  <div className="card">
    {/* <img className="card-img-top" src={brewery.brewery.images.squareMedium} alt="" /> */}
    <div className="card-block">
      <h4 className="card-title">{brewery.name}</h4>
      <p className="card-text">{brewery.description}</p>
    </div>
  </div>
);

Brewery.propTypes = {
  brewery: PropTypes.object,
};

export default Brewery;
