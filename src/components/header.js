import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Heading from 'react-bulma-components/lib/components/heading';
import logo from '../../static/img/logo.png';

const HeaderLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 3rem 1.5rem;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 2px solid #ebebeb;

  img {
    width: 75px;
    margin: 0 24px 0 0;
  }
`;

const Header = ({ title }) => (
  <header>
    <HeaderLink to="/">
      <img src={logo} alt="logo" />
      <div className="col">
        <Heading renderAs="h1" size={4}>{title}</Heading>
        <Heading renderAs="h2" subtitle size={6}>A commitment to First Responder health.</Heading>
      </div>
    </HeaderLink>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
