import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

const Header = ({ title, currentPage, logoUrl }) => (
  <Container>
    <Link id="brand" to="/">
      <img src={logoUrl} alt="logo" />
      <Title as="h1" size="large">{title}</Title>
    </Link>

    <Nav currentPage={currentPage} />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export default Header;
