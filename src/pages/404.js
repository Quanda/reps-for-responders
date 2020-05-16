import React from 'react';
import { Page } from '../components';
import Heading from 'react-bulma-components/lib/components/heading';
import Hero from 'react-bulma-components/lib/components/hero';
import { Link } from 'gatsby';

const NotFound = () => (
  <Page>
    <Hero size="large" color="dark" style={{ textAlign: 'center' }}>
      <Hero.Body>
        <Heading renderAs="h2">Sorry, this page was not found.</Heading>
        <Link to="/">Back to the homepage</Link>                     
      </Hero.Body>
    </Hero>
  </Page>
);

export default NotFound;
