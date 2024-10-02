import PropTypes from 'prop-types';
import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default ItemList