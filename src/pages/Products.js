import React from 'react';
import Products from '~cn/Products';

import { routesMap } from '~/routes';

const About = props => {
  const returnFunc = () => {
    console.log('Some action');
    setTimeout(() => {
      props.history.push(routesMap.home);
    }, 2000);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={returnFunc} type="button">
        Return
      </button>
      <Products />
    </div>
  );
};

export default About;
