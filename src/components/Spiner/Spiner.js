import React from 'react';

import img from './loader.svg';

import styles from './spiner.module.scss';

const Spiner = () => {
  return (
    <div className={styles.red}>
      <img src={img} alt="" />
    </div>
  );
}

export default Spiner;