import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Column.css';

function Column ({ children, right }) {
  const cls = cx('table__column', {
    'table__column--right': right,
  });

  return (
    <td className={cls}>
      {children}
    </td>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  right: PropTypes.any,
};

export default Column;
