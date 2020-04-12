import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const GetInvolved = ({ data, location }) => {
  const { strapiBusiness } = data;

  return (
    <Layout pathname={location.pathname}>
      <Head pageTitle={strapiBusiness.title} />
      <Box>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <div>
            <input type="hidden" name="bot-field" />
          </div>
          <div>
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
          </div>
          <div>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
          </div>
          <div>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
          </div>
          <div>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
          <input type="reset" value="Clear" />
        </form>
      </Box>
    </Layout>
  );
};

GetInvolved.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default GetInvolved;

export const query = graphql`
  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...businessMeta
    }
  }
`;
