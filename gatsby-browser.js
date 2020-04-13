import React from 'react';
import AppProvider from 'store/provider';
import './src/styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

// import wrapPageElementWithTransition from 'helpers/wrapPageElement';

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = wrapRootElement; // wrapPageElementWithTransition;
