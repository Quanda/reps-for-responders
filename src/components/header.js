import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Heading from 'react-bulma-components/lib/components/heading';
// import { Nav } from '.';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3rem 2rem;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 2px solid #ebebeb;

  #brand {
    text-transform: uppercase;
    font-size: 2.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }

  img {
    margin: 0 24px 0 0;
    border-radius: 9999px;
  }

  ${MEDIA.DESKTOP`
    flex-direction: column;
    align-items: center;
    text-align: center;
  `};
`;

const Header = ({ title, logoUrl }) => (
  <Container>
    <Link id="brand" to="/">
      <img src={logoUrl} alt="logo" width={100} height={100} />
      <Heading renderAs="h1" size={4}>{title}</Heading>
    </Link>
    {/* <Nav logoUrl={logoUrl} /> */}
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export default Header;
