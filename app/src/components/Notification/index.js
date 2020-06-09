import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

const Notification = (props) => {
  const { text } = props;
  if (!text) {
    return <Container />;
  }
  return <Container error={text}>{text}</Container>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
