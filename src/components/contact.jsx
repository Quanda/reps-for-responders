import React from 'react';
import {
  Field,
  Control,
  Label,
  Input,
  Textarea,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import ReCAPTCHA from 'react-google-recaptcha';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  onChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  render() {
    const { name, email, message, phone } = this.state;

    return (
      <Box>
        <Heading renderAs="h2" size={4}>
          Quick Contact Form
        </Heading>
        <Heading renderAs="h6" size={6} subtitle>
          We&apos;d love to hear from you
        </Heading>
        <form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <Field>
            <Label>Name</Label>
            <Control>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={this.onChange}
                value={name}
              />
            </Control>
          </Field>
          <Field>
            <Label>Email</Label>
            <Control>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.onChange}
                value={email}
              />
            </Control>
          </Field>
          <Field>
            <Label>Phone</Label>
            <Control>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                onChange={this.onChange}
                value={phone}
              />
            </Control>
          </Field>
          <Field>
            <Label>Message</Label>
            <Textarea
              name="message"
              placeholder="Start a conversation and we will get back to you"
              onChange={this.onChange}
              value={message}
            />
          </Field>
          {process.env.SITE_RECAPTCHA_KEY && (
            <ReCAPTCHA sitekey={process.env.SITE_RECAPTCHA_KEY} />
          )}
          <br />
          <Field kind="group">
            <Control>
              <Button type="reset">Cancel</Button>
            </Control>
            <Control>
              <Button color="link" type="submit">
                Send Message
              </Button>
            </Control>
          </Field>
        </form>
      </Box>
    );
  }
}

export default ContactForm;
