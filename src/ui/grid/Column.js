import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Column.css';

function Column ({ children, width, className }) {
  const cls = cx('grid__column', {
    [`grid__column--width-${width}`]: width,
    [className]: className,
  });

  return (
    <div className={cls}>
      {children}
    </div>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  className: PropTypes.string,
};

export default Column;
