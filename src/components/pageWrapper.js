import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Head, Header, Footer } from '.';

const PageWrapper = ({ data, children }) => {
  const { contact_links, logo, name } = data.strapiBusiness;

  return (
    <div>
      <Head />
      <Header
        title={name}
        logoUrl={logo.publicURL}
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
      query ($strapiBusinessId: String) {
        strapiBusiness (id: {eq: $strapiBusinessId} ) {
          name
          logo {
            publicURL
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
