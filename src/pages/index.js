import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
// import Gallery from 'components/gallery';
import Modal from 'containers/modal';
import { graphql, useStaticQuery } from 'gatsby';

const Index = ({ location }) => {
  const data = useStaticQuery(graphql`
    query indexQuery {
      strapiBusiness {
        id
        name
        description
        mission_statement
        social_media {
          instagram
          youtube
        }
      }
    }
  `);

  const { strapiBusiness } = data;

  return (
    <Layout pathname={location.pathname}>
      <Box>
        <Title as="h2" size="large">
          Our Mission
        </Title>
        <p>{strapiBusiness.mission_statement.substring(0, strapiBusiness.mission_statement.indexOf('\n'))}</p>
        <Modal buttonText="Read the full Statement">{<p>{strapiBusiness.mission_statement}</p>}</Modal>
      </Box>
      {/* <Gallery items={data.homeJson.gallery} /> */}
      <div style={{ height: '50vh' }} />
    </Layout>
  );
};

Index.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Index;
