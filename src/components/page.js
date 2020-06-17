import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Head, Header } from '.';

const Page = ({ data, children }) => {
  const { name, caption } = data.strapiBusiness;

  return (
    <div>
      <Head />
      <Header title={name} caption={caption} />
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const PageWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query($strapiBusinessId: String) {
        strapiBusiness(id: { eq: $strapiBusinessId }) {
          name
          caption
        }
      }
    `}
    render={(data) => <Page data={data} {...props} />}
  />
);

PageWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWithQuery;
