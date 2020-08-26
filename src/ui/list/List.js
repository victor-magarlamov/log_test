import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from './Item';
import './List.css';

function List ({
  children,
  className,
  divided,
  bordered,
  reversed,
  collapsed,
}) {
  const cls = cx('list', {
    'list--divided': divided,
    'list--bordered': bordered,
    'list--reversed': reversed,
    'list--collapsed': collapsed,
    [className]: className,
  });

  return (
    <div className={cls}>
      <div className="list__inner">
        {children}
      </div>
    </div>
  );
}

List.Item = Item;

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  divided: PropTypes.any,
  bordered: PropTypes.any,
  reversed: PropTypes.any,
  collapsed: PropTypes.any,
};

export default List;
