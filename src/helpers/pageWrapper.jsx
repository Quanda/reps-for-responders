import React from 'react';
import PropTypes from 'prop-types';
import { Head, Header } from '../components';
import { staticLogoSrc } from '../../static/img';

const Page = ({ data, children }) => {
  if (!data.strapiBusiness) {
    return null;
  }

  const { name, banner, caption, logo } = data.strapiBusiness;

  // use the remote sourced logo (localFile), otherwise fallback to the static copy
  const logoSrc =
    (logo && logo.localFile && logo.localFile.childImageSharp.fixed.src) ||
    staticLogoSrc;

  return (
    <>
      <Head />
      <Header
        title={name}
        banner={banner}
        caption={caption}
        logoSrc={logoSrc}
      />
      {children}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
