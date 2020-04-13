import React from 'react';
import PropTypes from 'prop-types';
import Level from 'react-bulma-components/lib/components/level';
import Heading from 'react-bulma-components/lib/components/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialHeader = ({ urls }) => {
  const { youtube, instagram, facebook, twitter, email } = urls;

  return (
    <Level renderAs="nav">
      <Level.Item>
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
  )
};

SocialHeader.propTypes = {
  urls: PropTypes.object
}

export default SocialHeader;