import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectList from '../../components/project-list/ProjectList';
import ProjectListMenu from '../../components/project-list-menu/ProjectListMenu';

function LeftSideBar ({ projects, onLogClick }) {
  const [isProjectListReversed, setIsProjectListReversed] = useState(null);
  
  const projectListReverseClickHandler = () => {
    setIsProjectListReversed(prev => !prev);
  };

  return (
    <Fragment>
      <ProjectListMenu
        onReverseClick={projectListReverseClickHandler}
      />

      <ProjectList
        data={projects}
        reversed={isProjectListReversed}
        onClick={onLogClick}
      />
    </Fragment>
  );
}

LeftSideBar.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    logs: PropTypes.array,
  })).isRequired,
  onLogClick: PropTypes.func.isRequired,
};

export default LeftSideBar;
