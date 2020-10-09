import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  padding: 3rem 3rem 6rem 3rem;
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

const NoticeTextAlt = styled.span`
  display: block;
  padding: 6px 12px;
  background-color: var(--theme-blue-dark);
  color: var(--theme-yellow);
  text-align: center;
`;

const NoticeText = styled.span`
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  padding: 0px 3rem;
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
  font-size: 0.75rem;
  padding: 1rem 2rem;
  height: 52px;
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const Header = ({ title, banner, caption, logoSrc }) => (
  <header>
    {banner && <Banner>{banner}</Banner>}
    <NoticeTextAlt>
      Visit{' '}
      <Content
        renderAs="a"
        href="https://valorsupplements.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        valorsupplements.net
      </Content>{' '}
      and enter code <b>RFR10</b> for 10% off your total purchase
    </NoticeTextAlt>
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
      <NoticeText>
        FREE OPEN GYM FOR FIRST RESPONDERS AND MILITARY @ IRON FIST ATHLETICS
        149 MAIN STREET, NANUET, NY 10954 EVERY TUESDAY AND THURSDAY FROM 1030
        AM- 230 PM
      </NoticeText>
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
