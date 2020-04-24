import React from 'react';
import { PageWrapper } from '../components';
import Heading from 'react-bulma-components/lib/components/heading';
import Hero from 'react-bulma-components/lib/components/hero';

const NotFound = () => (
  <PageWrapper>
    <Hero size="large" color="warning">
      <Hero.Body>
        <Heading renderAs="h2">404 - Page Not Found.</Heading>                       
      </Hero.Body>
    </Hero>
  </PageWrapper>
);

export default NotFound;
