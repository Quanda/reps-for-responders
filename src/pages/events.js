import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Page, Head } from '../components';

const Events = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <Page>
      <Head pageTitle={strapiBusiness.name} />
    </Page>
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