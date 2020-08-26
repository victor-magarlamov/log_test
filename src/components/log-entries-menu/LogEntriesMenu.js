import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Form, Label } from '../../ui';
import { LOG_LEVELS } from '../../constants';
import { getLevelColor } from '../../helpers';
import './LogEntriesMenu.css';

function LogEntriesMenu ({
  onLevelClick,
  currentLevelFilters,
  onSearchSubmit,
}) {
  return (
    <Menu className="log-entries-menu">
      {Object.values(LOG_LEVELS).map(level => (
        <Menu.Item key={level} onClick={onLevelClick(level)}>
          <Label
            text={level}
            color={getLevelColor(level)}
            disabled={!currentLevelFilters.includes(level)}
          />
        </Menu.Item>
      ))}

      <Menu.Item right>
        <Form className="search-entry-form" onSubmit={onSearchSubmit}>
          <Form.Input placeholder='Search' noborder />
          <Form.Button />
        </Form>
      </Menu.Item>
    </Menu>
  );
}

LogEntriesMenu.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  onLevelClick: PropTypes.func.isRequired,
  currentLevelFilters: PropTypes.arrayOf(PropTypes.string),
};

export default LogEntriesMenu;
