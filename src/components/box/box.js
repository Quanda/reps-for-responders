import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, styles }) => <Container styles={styles}>{children}</Container>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
};

export default Box;
