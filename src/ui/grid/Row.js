import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Row.css';

function Row ({ children }) {
  const cls = cx('grid__row', {
  });

  return (
    <div className={cls}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
