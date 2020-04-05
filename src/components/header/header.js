import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, currentPage, logoUrl }) => (
  <AnimatedContainer>
    <Container>
      <Link id="brand" to="/">
        <img src={logoUrl} alt="logo" />
        <Title as="h1">{title}</Title>
      </Link>

      <Nav currentPage={currentPage} />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export default Header;
