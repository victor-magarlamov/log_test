import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { LOG_LEVELS } from '../../constants';
import LogEntriesMenu from '../../components/log-entries-menu/LogEntriesMenu';
import LogEntriesTable from '../../components/log-entries-table/LogEntriesTable';
import './MainContent.css';

const filterByLevel = (item, levelFilters) => {
  return levelFilters.includes(item.level);
};

const filterByMessage = (item, regexp) => {
  if (!regexp) {
    return true;
  }

  const matches = item.message.match(regexp);

  return matches ? matches.length > 0 : false;
};

function MainContent ({ logEntries, loading }) {
  const [levelFilters, setLevelFilters] = useState(Object.values(LOG_LEVELS));
  const [searchQuery, setSearchQuery] = useState(null);

  const computedData = useMemo(() => {
    let regexp = null;

    if (searchQuery) {
      regexp = new RegExp(searchQuery, 'gi');
    }

    return logEntries.filter(item => {
      return (
        filterByLevel(item, levelFilters) &&
        filterByMessage(item, regexp)
      );
    });
  }, [levelFilters, searchQuery, logEntries]);

  const filterByLevelClickHandler = level => () => {
    if (levelFilters.includes(level)) {
      return setLevelFilters(levelFilters.filter(i => i !== level));
    }

    setLevelFilters(prev => [...prev, level]);
  };

  const searchSubmitHandler = e => {
    e.preventDefault();
    setSearchQuery(e.target.querySelector('input').value);
  };

  return (
    <main className="main-content">
      <LogEntriesMenu
        currentLevelFilters={levelFilters}
        onLevelClick={filterByLevelClickHandler}
        onSearchSubmit={searchSubmitHandler}
      />

      <LogEntriesTable
        data={computedData}
        searchQuery={searchQuery}
        loading={loading}
      />
    </main>
  );
}

MainContent.propTypes = {
  logEntries: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    level: PropTypes.oneOf(['warning', 'info', 'error', 'debug']),
    timestamp: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool,
};

export default MainContent;
