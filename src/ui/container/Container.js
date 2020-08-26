import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Container.css';

function Container ({ children, className }) {
  const cls = cx('container', {
    [className]: className,
  });

  return (
    <div className={cls}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Container;
