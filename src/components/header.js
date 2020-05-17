import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Heading from 'react-bulma-components/lib/components/heading';
import logo from '../../static/img/logo.png';
import usaIcon from '../../static/img/usa.png';

const HeaderLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  padding: 3rem;
  width: 100%;
  background-color: #102040;
  border-bottom: 2px solid #b7b7b7;

  img {
    width: 75px;
    margin: 0 24px 0 0;
  }

  .title {
    color: #ffffff;
  }
  .subtitle {
    color: #b7b7b7;
  }
`;

const Header = ({ title, caption }) => (
  <header>
    <div style={{ position: 'absolute', right: 8, top: 8 }}>
      <img src={usaIcon} alt="responder icons" width={24} />
    </div>
    <HeaderLink to="/">
      <img src={logo} alt="logo" />
      <div className="col">
        <Heading renderAs="h1" size={4}>{title}</Heading>
        {caption && <Heading renderAs="h2" subtitle size={6}>{caption}</Heading>}
      </div>
    </HeaderLink>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

export default Header;
