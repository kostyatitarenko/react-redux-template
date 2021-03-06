import React from 'react';
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
      <h1>About</h1>
      <button onClick={returnFunc} type="button">
        Return
      </button>
    </div>
  );
};

export default About;
