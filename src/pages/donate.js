import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Donate = ({ location }) => {
  const data = useStaticQuery(graphql`
    query donateQuery {
      strapiBusiness {
        name
        additional_links {
          paypal
          gofundme
        }
      }
    }
  `);

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
};

export default Donate;