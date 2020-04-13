import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './brand.css';
import Heading from 'react-bulma-components/lib/components/heading';
import Nav from 'components/nav';

const Header = ({ title, logoUrl }) => (
  <Container>
    <Link id="brand" to="/">
      <img src={logoUrl} alt="logo" />
      <Heading renderAs="h1">{title}</Heading>
    </Link>

    <Nav logoUrl={logoUrl} />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export default Header;
