import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import BrandHeader from 'components/header/brand';
import SocialHeader from 'components/header/social';
import SocialFooter from 'components/footer';

const PageWrapper = ({ data, children }) => {
  const { contact_links } = data.strapiBusiness;

  return (
    <div>
      <Head />
      <SocialHeader urls={contact_links} />
      <BrandHeader
        title={data.site.siteMetadata.siteTitle}
        logoUrl={data.strapiBusiness.logo.publicURL}
      />
      {children}
      <SocialFooter urls={contact_links} />
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
      query PageWrapperQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        strapiBusiness {
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
