import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageWrapper from 'components/pageWrapper';
import Box from 'components/box';
import Head from 'components/head';

const Donate = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <PageWrapper>
      <Head pageTitle={strapiBusiness.title} />
      <Box>TO DO</Box>
    </PageWrapper>
  );
};

Donate.propTypes = {
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