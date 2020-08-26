import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Column from './Column';
import './Table.css';

function Table ({ children }) {
  return (
    <Fragment>
      {children.length > 0
        ?
          <table className="table">
            <tbody>
              {children}
            </tbody>
          </table>
        : <div className="no-data-message">No data</div>
      }
    </Fragment>
  );
}

Table.Row = Row;
Table.Column = Column;

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
