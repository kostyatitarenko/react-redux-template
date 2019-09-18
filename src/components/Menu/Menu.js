import React from 'react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to={routesMap.home}>Home</Link>
      </li>
      <li>
        <Link to={routesMap.about}>About</Link>
      </li>
      <li>
        <Link to={routesMap.products}>Products</Link>
      </li>
    </ul>
  );
};

export default Menu;
