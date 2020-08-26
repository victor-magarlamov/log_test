import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.css';

function Button ({
  type,
  children,
  label = 'Ok',
  nofill,
  onClick,
}) {
  const cls = cx('button', {
    'button--nofill': nofill,
  });

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children || label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  nofill: PropTypes.any,
};

export default Button;
