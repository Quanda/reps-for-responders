import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const GetInvolved = ({ location }) => {
  const data = useStaticQuery(graphql`
    query getInvolvedQuery {
      strapiBusiness {
        name
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

GetInvolved.propTypes = {
  location: PropTypes.object.isRequired,
};

export default GetInvolved;
