import React from 'react';
import PropTypes from 'prop-types';

const HelloMessage = props => <div>Hello {props.name}!</div>;

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

module.exports = HelloMessage;
