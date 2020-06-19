import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import PageWrapper from './src/helpers/pageWrapper';
import './src/styles/index.scss';

library.add(fab);
library.add(fas);

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <PageWrapper {...props}>{element}</PageWrapper>;
};
