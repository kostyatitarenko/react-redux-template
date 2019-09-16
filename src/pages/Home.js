import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../containers/Products';
import routes from '../routes';

const Home = () => {
  return (
    <div>
      <Link to={routes.About}>About</Link>
      <Products />
    </div>
   
  );
}

export default Home;