import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '../../ui';
import './ProjectListMenu.css';

function ProjectListMenu ({ onReverseClick }) {
  return (
    <Menu className="project-list-menu">
      <Menu.Item onClick={onReverseClick}>
        reverse
      </Menu.Item>
    </Menu>
  );
}

ProjectListMenu.propTypes = {
  onReverseClick: PropTypes.func.isRequired,
};

export default ProjectListMenu;
