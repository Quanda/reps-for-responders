import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import { MainContent } from './layout.css';

const Layout = ({ data, pathname, children }) => {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <Header
        title={data.site.siteMetadata.siteTitle}
        currentPage={pathname}
        logoUrl={data.strapiBusiness.logo.publicURL}
      />
      <MainContent>
        {children}
      </MainContent>
    </div>    
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        strapiBusiness {
          logo {
            publicURL
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
