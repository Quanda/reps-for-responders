import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'react-bulma-components/lib/components/heading';

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  padding: 3rem;
  width: 100%;
  position: relative;
  background-color: var(--theme-blue-dark);

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

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: var(--theme-yellow);
  color: var(--theme-blue-dark);
  font-size: 0.875rem;
  height: 48px;
  font-weight: 500;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const Header = ({ title, banner, caption, logoSrc }) => (
  <header>
    {banner && <Banner>{banner}</Banner>}
    <HeaderBar>
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
    </HeaderBar>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  banner: PropTypes.string,
  caption: PropTypes.string,
};

Header.defaultProps = {
  caption: 'A Commitment to First Responder Health.',
};

export default Header;
