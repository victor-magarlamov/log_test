import React, { createElement, memo } from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const highlightText = (text, query) => {
  const regexp = new RegExp(`(${query})`, 'gi');
  const textArr = text.split(regexp);

  const res = textArr.map((item, index) => {
    if (regexp.test(item)) {
      return createElement(
        'span',
        {className: 'text--highlight', key: index},
        item
      );
    } else {
      return item;
    }
  });

  return res;
};

const Text = memo(({ text, highlight }) => {
  const getContent = () => {
    if (highlight) {
      return highlightText(text, highlight);
    } else {
      return text;
    }
  };

  return (
    <span className="text">
      {getContent()}
    </span>
  );
});

Text.propTypes = {
  text: PropTypes.string,
  highlight: PropTypes.string,
};

export default Text;
