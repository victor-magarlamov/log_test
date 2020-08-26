import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Label.css';

const Label = memo(({ text, color, disabled }) => {
  const cls = cx('label', {
    [`label--${color}`]: color,
    'label--disabled': disabled,
  });

  return (
    <div className={cls}>{text}</div>
  );
});

Label.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['red', 'orange', 'blue', 'grey', 'green']),
  disabled: PropTypes.any,
};

export default Label;
