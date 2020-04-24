import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Head, Header, Footer } from '.';

const PageWrapper = ({ data, children }) => {
  const { contact_links, logo, name } = data.strapiBusiness;
  const logoPath = process.env.API_URL + logo.url;

  return (
    <div>
      <Head />
      <Header
        title={name}
        logoUrl={logoPath}
      />
      {children}
      <Footer urls={contact_links} />
    </div>    
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const PageWrapperWithQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        strapiBusiness {
          name
          logo {
            url
          }
          ...businessUrls
        }
      }
    `}
    render={data => <PageWrapper data={data} {...props} />}
  />
);

PageWrapperWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapperWithQuery;
