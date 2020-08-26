import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Item.css';

const Item = memo(({ children, header, sticky, selected, onClick }) => {
  const cls = cx('list__item', {
    'list__item--header': header,
    'list__item--sticky': sticky,
    'list__item--selected': selected,
    'list__item--clickable': onClick,
  });

  return (
    <div className={cls} onClick={onClick}>
      {children}
    </div>
  );
});

Item.propTypes = {
  children: PropTypes.node,
  header: PropTypes.any,
  sticky: PropTypes.any,
  selected: PropTypes.any,
  onClick: PropTypes.func,
};

export default Item;
