import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageWrapper from 'components/PageWrapper';
import Box from 'components/box';
import Head from 'components/head';

const About = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <PageWrapper>
      <Head pageTitle={strapiBusiness.title} />
      <Box>TO DO</Box>
    </PageWrapper>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...businessMeta
      ...businessUrls
    }
  }
`;
