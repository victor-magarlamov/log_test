import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';

function Form ({ children, className, onSubmit }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.Input = Input;
Form.Button = Button;

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
