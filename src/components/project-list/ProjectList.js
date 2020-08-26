import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../ui';
import './ProjectList.css';

function ProjectList ({ data, reversed, onClick }) {

  const [selectedItem, setSelectedItem] = useState(null);
  const [collapsedItems, setCollapsedItems] = useState([]);

  const headerClickHandler = itemName => () => {
    if (collapsedItems.includes(itemName)) {
      return setCollapsedItems(prev => prev.filter(i => i !== itemName));
    }

    setCollapsedItems([...collapsedItems, itemName]);
  };
  
  const itemClickHandler = item => () => {
    setSelectedItem(item);
    onClick(item);
  };

  return (
    <List className="project-list" reversed={reversed}>
      {data.map(item => (
        <Fragment key={item.name}>
          <List
            divided
            collapsed={collapsedItems.includes(item.name)}
          >
            <List.Item
              header
              sticky
              onClick={headerClickHandler(item.name)}
            >
              {item.name}
            </List.Item>

            {item.logs.map(log => (
              <List.Item
                key={log}
                selected={log === selectedItem}
                onClick={itemClickHandler(log)}
              >
                {log}
              </List.Item>
            ))}
          </List>
        </Fragment>
      ))}
    </List>
  );
}

ProjectList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    logs: PropTypes.array,
  })).isRequired,
  reversed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ProjectList;
