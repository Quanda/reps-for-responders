import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageWrapper from 'components/PageWrapper';
import Box from 'components/box';
import Head from 'components/head';
import { Field, Control, Label, Input, Textarea } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

const GetInvolved = ({ data }) => {
  const { strapiBusiness } = data;

  return (
    <PageWrapper>
      <Head pageTitle={strapiBusiness.title} />
      <Box>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <div>
            <input type="hidden" name="bot-field" />
          </div>
          <Field>
            <Label>Name</Label>
            <Control>
              <Input type="text" placeholder="Your Name" />
            </Control>
          </Field>
          <Field>
            <Label>Subject</Label>
            <Control>
              <Input placeholder="Subject" />
            </Control>
          </Field>          
          <Field>
            <Label>Message</Label>
            <Textarea placeholder="Textarea" />
            <p className="help">This is a help text</p>
          </Field>
          <Field kind="group">
            <Control>
              <Button type="reset">Cancel</Button>
            </Control>
            <Control>
              <Button color="link" type="primary">Send Message</Button>
            </Control>            
          </Field>          
        </form>
      </Box>
    </PageWrapper>
  );
};

GetInvolved.propTypes = {
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
