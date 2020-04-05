import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const About = ({ location }) => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      strapiBusiness {
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

About.propTypes = {
  location: PropTypes.object.isRequired,
};

export default About;
