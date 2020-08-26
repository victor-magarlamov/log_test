import React from 'react';
import PropTypes from 'prop-types';
import './Row.css';

function Row ({ children }) {
  return (
    <tr className="table__row">
      {children}
    </tr>
  );
}

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
