import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="item-list list-group">
      {items.map(({ id, title }) => {
        return (
          <li className="list-item" key={id}>
            {title}
          </li>
        );
      })}
    </ul>
  );
}

export default List;