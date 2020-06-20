import React from 'react';
import PropTypes from 'prop-types';
import { Head, Header } from '../components';

const Page = ({ data, children }) => {
  const { name, caption } = data.strapiBusiness;

  return (
    <>
      <Head />
      <Header title={name} caption={caption} />
      {children}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
