import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Head, Header } from '.';

const Page = ({ data, children }) => {
  const { name, multimedia } = data.strapiBusiness;
  const logo = multimedia.find(obj => obj.name === 'logo');
  return (
    <div>
      <Head />
      <Header title={name} logoUrl={logo && logo.localFile.url} />
      {children}
    </div>    
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const PageWithQuery = props => (
  <StaticQuery
    query={graphql`
    query ($strapiBusinessId: String) {
      strapiBusiness (id: {eq: $strapiBusinessId} ) {
        name
        multimedia {
          name
          localFile {
            url
          }
        }     
      }
    }
  `}
    render={data => <Page data={data} {...props} />}
  />
);

PageWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWithQuery;
