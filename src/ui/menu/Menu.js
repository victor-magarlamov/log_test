import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import cx from 'classnames';
import './Menu.css';

function Menu ({ children, className }) {
  const cls = cx('menu', {
    [className]: className,
  });

  return (
    <div className={cls}>
      {children}
    </div>
  );
}

Menu.Item = Item;

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Menu;
