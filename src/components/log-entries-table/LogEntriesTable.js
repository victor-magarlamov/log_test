import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table, Label, Text } from '../../ui';
import { getLevelColor } from '../../helpers';
import './LogEntriesTable.css';

function LogEntriesTable ({ data, loading, searchQuery }) {
  return (
    <div className="log-table">
      <Table>
        {data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Column>
              <Label
                text={item.level}
                color={getLevelColor(item.level)}
              />
            </Table.Column>
            <Table.Column>
              <Text text={item.message} highlight={searchQuery} />
            </Table.Column>
            <Table.Column right>
              {item.timestamp}
            </Table.Column>
          </Table.Row>
        ))}
      </Table>

      {loading && (
        <div className="log-table__loader">
          Loading...
        </div>
      )}
    </div>
  );
}

LogEntriesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    level: PropTypes.oneOf(['warning', 'info', 'error', 'debug']),
    timestamp: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool,
  searchQuery: PropTypes.string,
};

export default LogEntriesTable;
