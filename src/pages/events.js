import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { PageWrapper, Head } from '../components';

const Events = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <PageWrapper>
      <Head pageTitle={strapiBusiness.name} />
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