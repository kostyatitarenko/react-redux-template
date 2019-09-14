import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../containers/Products'

const Home = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Products />
    </div>
   
  );
}

export default Home;