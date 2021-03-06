import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';
import Hero from 'react-bulma-components/lib/components/hero';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usaFlag } from '../../static/img';

const SocialMediaFooter = ({ social_media, email }) => {
  const { youtube, instagram, facebook, twitter } = social_media;

  return (
    <Hero size="small" color="primary">
      <Hero.Footer>
        <Footer>
          <Container>
            <Level renderAs="nav">
              <Level.Item>
                <img src={usaFlag} alt="usa flag" width={50} />
                <Heading
                  renderAs="a"
                  target="_blank"
                  href={`mailto:${email}`}
                  subtitle
                  size={6}
                >
                  {email}
                </Heading>
              </Level.Item>
              <Level.Item>
                {youtube && (
                  <a href={youtube} aria-label="youtube">
                    <FontAwesomeIcon size="1x" icon={['fab', 'youtube']} />
                  </a>
                )}
                {instagram && (
                  <a href={instagram} aria-label="instagram">
                    <FontAwesomeIcon size="1x" icon={['fab', 'instagram']} />
                  </a>
                )}
                {facebook && (
                  <a href={facebook} aria-label="facebook">
                    <FontAwesomeIcon size="1x" icon={['fab', 'facebook']} />
                  </a>
                )}
                {twitter && (
                  <a href={twitter} aria-label="twitter">
                    <FontAwesomeIcon size="1x" icon={['fab', 'twitter']} />
                  </a>
                )}
              </Level.Item>
            </Level>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  );
};

SocialMediaFooter.propTypes = {
  social_media: PropTypes.shape({
    youtube: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
  }),
  email: PropTypes.string,
};

export default SocialMediaFooter;
