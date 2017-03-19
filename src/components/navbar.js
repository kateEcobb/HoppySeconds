import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className="header">
    <ul className="leftMenu">
      <Link to="/" activeClassName="active" className="items">Home</Link>
      <Link to="/breweries" className="items">Your Breweries</Link>
    </ul>
    <h1>Hoppy Seconds</h1>
  </div>
);

export default Navbar;
