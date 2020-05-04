import React from 'react';
import { Page } from '../components';
import Heading from 'react-bulma-components/lib/components/heading';
import Hero from 'react-bulma-components/lib/components/hero';

const NotFound = () => (
  <Page>
    <Hero size="large" color="warning">
      <Hero.Body>
        <Heading renderAs="h2">404 - Page Not Found.</Heading>                       
      </Hero.Body>
    </Hero>
  </Page>
);

export default NotFound;
