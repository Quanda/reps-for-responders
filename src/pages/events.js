import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageWrapper from 'components/pageWrapper';
import Box from 'components/box';
import Head from 'components/head';

const Events = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <PageWrapper>
      <Head pageTitle={strapiBusiness.title} />
      <Box>TO DO</Box>
    </PageWrapper>
  );
};

Events.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Events;


export const query = graphql`
  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...businessMeta
    }
  }
`;