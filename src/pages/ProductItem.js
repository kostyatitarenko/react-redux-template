import React from 'react';

const ProductItem = (props) => {
  return <h1>Product #{props.match.params.id}</h1>;
};

export default ProductItem;
