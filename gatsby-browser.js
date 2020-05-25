import React from 'react';
import AppProvider from 'store/provider';
import './src/styles/index.scss';
import * as GoogleAnalytics from './src/helpers/googleAnalytics';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab);
library.add(fas);

// Initialize Google Analytics
GoogleAnalytics.initialize(process.env.GA_TRACKING_ID);

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

export const wrapPageElement = wrapRootElement;
