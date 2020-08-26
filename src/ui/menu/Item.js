import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Item.css';

function Item ({ children, right, onClick })  {
  const cls = cx('menu__item', {
    'menu__item--clickable': onClick,
    'menu__item--right': right,
  });

  return (
    <div className={cls} onClick={onClick}>
      {children}
    </div>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  right: PropTypes.any,
  onClick: PropTypes.func,
};

export default Item;
