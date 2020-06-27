import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'react-bulma-components/lib/components/heading';

const BrandBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  padding: 3rem;
  width: 100%;
  position: relative;
  background-color: var(--theme-blue-dark);
  border-bottom: 2px solid var(--theme-gray);

  img {
    width: 85px;
    margin: 0 24px 0 0;
  }

  .title {
    color: var(--theme-white);
  }
  .subtitle {
    color: var(--theme-gray);
  }
`;

const NoticeText = styled.p`
  position: absolute;
  right: 24px;
  bottom: 8px;
  font-size: 0.875rem;
  color: var(--theme-yellow);
`;

const Header = ({ title, caption, logoSrc }) => (
  <header>
    <BrandBar>
      <img src={logoSrc} alt="logo" />
      <div className="col">
        <Heading renderAs="h1" size={4}>
          {title}
        </Heading>
        {caption && (
          <Heading renderAs="h2" subtitle size={6}>
            {caption}
          </Heading>
        )}
      </div>
      <NoticeText>New location coming soon...</NoticeText>
    </BrandBar>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

Header.defaultProps = {
  caption: 'A Commitment to First Responder Health.',
};

export default Header;
