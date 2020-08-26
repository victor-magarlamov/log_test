import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Row from './Row';
import Column from './Column';
import './Grid.css';

function Grid ({ children, direction = 'row' }) {
  const cls = cx('grid', {
    [`grid--direction-${direction}`]: direction,
  });

  return (
    <div className="grid">
      {children}
    </div>
  );
}

Grid.Row = Row;
Grid.Column = Column;

Grid.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column']),
  onSubmit: PropTypes.func,
};

export default Grid;
