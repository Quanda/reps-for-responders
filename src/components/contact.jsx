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
      recaptchaDone: false,
    };
  }

  onChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  onRecaptchaChange = () => {
    this.setState({ recaptchaDone: true });
  };

  render() {
    const { name, email, message, phone, recaptchaDone } = this.state;

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
            <Label>
              Name
              <Control>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={this.onChange}
                  value={name}
                  required
                />
              </Control>
            </Label>
          </Field>
          <Field>
            <Label>
              Email
              <Control>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  value={email}
                  required
                />
              </Control>
            </Label>
          </Field>
          <Field>
            <Label>
              Phone
              <Control>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  onChange={this.onChange}
                  value={phone}
                />
              </Control>
            </Label>
          </Field>
          <Field>
            <Label>
              Message
              <Textarea
                name="message"
                placeholder="Start a conversation and we will get back to you"
                onChange={this.onChange}
                value={message}
                required
              />
            </Label>
          </Field>
          {process.env.SITE_RECAPTCHA_KEY && (
            <ReCAPTCHA
              size="compact"
              sitekey={process.env.SITE_RECAPTCHA_KEY}
              onChange={this.onRecaptchaChange}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            />
          )}
          <br />
          <Field kind="group">
            <Control>
              <Button type="reset">Cancel</Button>
            </Control>
            <Control>
              <Button color="link" type="submit" disabled={!recaptchaDone}>
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
