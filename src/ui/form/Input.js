import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.css';

function Input ({
  type = "text",
  name,
  placeholder,
  defaultValue,
  noborder,
}) {
  const cls = cx('input', {
    'input--noborder': noborder,
  });

  return (
    <input
      className={cls}
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
  noborder: PropTypes.any,
};

export default Input;
