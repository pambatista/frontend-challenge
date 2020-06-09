/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';


const Input = (props) => {
  const {
    id, label, type, value, placeholder, handleInput,
  } = props;
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
      />
    </Container>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
