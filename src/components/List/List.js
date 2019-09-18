import React from 'react';
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';

const List = ({ items }) => {
  return (
    <ul className="item-list list-group">
      {items.map(({ id, title }) => {
        return (
          <li className="list-item" key={id}>
            <Link to={urlBuilder('productItem', {id})}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
