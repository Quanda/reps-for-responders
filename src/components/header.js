import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Heading from 'react-bulma-components/lib/components/heading';
import { Nav } from '.';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 2rem;

  ${MEDIA.DESKTOP`
    flex-direction: column;
    align-items: center;
    text-align: center;
  `};

  #brand {
    font-family: Rockwell;
    text-transform: uppercase;
    font-size: 2.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    
    img {
      height: 75px;
      margin: 0 16px 0 0;
      border-radius: 9999px;
    }

    ${MEDIA.DESKTOP`
      flex-direction: column;

      img {
        height: 75px;
        margin: 0 0 16px 0;
      }
    `}
  }
`;

const Header = ({ title, logoUrl }) => (
  <Container>
    <Link id="brand" to="/">
      <img src={logoUrl} alt="logo" width={75} height={75} />
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
