import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { PageWrapper, Head } from '../components';

const About = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <PageWrapper>
      <Head pageTitle={strapiBusiness.name} />
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
