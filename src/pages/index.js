import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Modal from 'containers/modal';

const Index = ({ data, location }) => {
  const { strapiBusiness } = data;

  return (
    <Layout pathname={location.pathname}>
      <Box>
        <Title as="h2" size="large">Our Mission</Title>
        <p>{strapiBusiness.mission_statement.substring(0, strapiBusiness.mission_statement.indexOf('\n'))}</p>
        <Modal buttonText="Read the full Statement">{<p>{strapiBusiness.mission_statement}</p>}</Modal>

      </Box>
      {/* <Gallery items={data.homeJson.gallery} /> */}
      <div style={{ height: '50vh' }} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

/* Primary query made up of sub queries in fragment form for reuse in other pages */
export const query = graphql`
  fragment businessMeta on StrapiBusiness {
    name
    description
    mission_statement
    contact_email
    business_hours {
      Monday
      Tuesday
      Wednesday
      Thursday
      Friday
      Saturday
      Sunday
    }
  }

  fragment businessUrls on StrapiBusiness {
    additional_links {
      paypal
      gofundme
    }
    social_media {
      instagram
      youtube 
    }
  }

  fragment allBusinessFields on StrapiBusiness {
    ...businessMeta
    ...businessUrls
  }

  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...allBusinessFields
    }
  }
`;

export default Index;
