import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';
import Hero from 'react-bulma-components/lib/components/hero';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Content from 'react-bulma-components/lib/components/content';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const SocialMediaFooter = ({ urls }) => {
  const { youtube, instagram, facebook, twitter, email } = urls;

  return (
    <Hero size="small">
      <Hero.Head renderAs="header" />
      <Hero.Body />
      <Hero.Footer>
        <Footer>
          <Container>
            <Level>
              {youtube && <Level.Item>
                <Content renderAs="a" target="_blank" href={youtube}>
                  <Heading renderAs="h6" heading>
                    YouTube
                  </Heading>
                  <FontAwesomeIcon size="3x" icon={[ 'fab', 'youtube' ]} />
                </Content>
              </Level.Item>}
              {instagram && <Level.Item>
                <Content renderAs="a" target="_blank" href={instagram}>
                  <Heading renderAs="h6" heading>
                    Instagram
                  </Heading>
                  <FontAwesomeIcon size="3x" icon={[ 'fab', 'instagram' ]} />
                </Content>
              </Level.Item>}
              {facebook &&
              <Level.Item>
                <Content renderAs="a" target="_blank" href={facebook}>
                  <Heading renderAs="h6" heading>
                    Facebook
                  </Heading>
                  <FontAwesomeIcon size="3x" icon={[ 'fab', 'facebook' ]} />
                </Content>
              </Level.Item>}
              {twitter &&
              <Level.Item>
                <Content renderAs="a" target="_blank" href={twitter}>
                  <Heading renderAs="h6" heading>
                    Twitter
                  </Heading>
                  <FontAwesomeIcon size="3x" icon={[ 'fab', 'twitter' ]} />
                </Content>
              </Level.Item>}              
              {email && <Level.Item>
                <Content renderAs="a" target="_blank" href={`mailto:${email}`}>
                  <Heading renderAs="h6" heading>
                    Email
                  </Heading>
                  <FontAwesomeIcon size="3x" icon={faAt} />
                </Content>
              </Level.Item>}
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

