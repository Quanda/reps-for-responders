import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';
import Hero from 'react-bulma-components/lib/components/hero';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usaIcon from '../../static/img/usa.jpg';

const SocialMediaFooter = ({ urls }) => {
  const { youtube, instagram, facebook, twitter, email } = urls;

  return (
    <Hero size="small" color="primary">
      <Hero.Footer>
        <Footer>
          <Container>
            <Level renderAs="nav">
              <Level.Item>
                <img src={usaIcon} alt="usa flag" width={50} />
                <Heading renderAs="a" target="_blank" href={`mailto:${email}`} subtitle size={6}>{urls.email}</Heading>        
              </Level.Item>
              <Level.Item>
                {youtube && (
                  <a href={youtube}>
                    <FontAwesomeIcon size="1x" icon={[ 'fab', 'youtube' ]} />
                  </a>
                )}
                {instagram && (
                <a href={instagram}>
                  <FontAwesomeIcon size="1x" icon={[ 'fab', 'instagram' ]} />
                </a>
                )}
                {facebook && (
                <a href={facebook}>
                  <FontAwesomeIcon size="1x" icon={[ 'fab', 'facebook' ]} />
                </a>
                )}
                {twitter && (
                <a href={twitter}>
                  <FontAwesomeIcon size="1x" icon={[ 'fab', 'twitter' ]} />
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
  urls: PropTypes.object
}

export default SocialMediaFooter;

