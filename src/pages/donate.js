import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Donate = ({ data, location }) => {
  const { strapiBusiness } = data;

  return (
    <Layout pathname={location.pathname}>
      <Head pageTitle={strapiBusiness.title} />
      <Box>TO DO</Box>
    </Layout>
  );
};

Donate.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Donate;


export const query = graphql`
  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...businessMeta
      ...businessUrls
    }
  }
`;