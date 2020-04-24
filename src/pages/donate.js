import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { PageWrapper, Head } from '../components';

const Donate = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <PageWrapper>
      <Head pageTitle={strapiBusiness.title} />
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