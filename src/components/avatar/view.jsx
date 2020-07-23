import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Lightbox from 'react-image-lightbox';
import {
  StyledCard,
  StyledCardImage,
  StyledCardContent,
  StyledIcon,
  StyledModalWrapper,
} from './style';
import 'react-image-lightbox/style.css';

const Avatar = ({ person }) => {
  const { fluid } = person.picture.childImageSharp;
  const [isLightboxOpen, toggleLightboxOpen] = useState(false);

  return (
    <>
      <StyledCard>
        <StyledCardImage src={fluid.src} size="square" />
        <StyledCardContent>
          <StyledModalWrapper
            role="button"
            aria-label="open fullscreen view"
            tabIndex="0"
            onClick={() => toggleLightboxOpen(true)}
            onKeyPress={() => toggleLightboxOpen(true)}
          >
            <StyledIcon
              size="1x"
              icon={['fas', 'expand-alt']}
              nomargin="true"
              color="var(--theme-gray)"
            />
          </StyledModalWrapper>
          <Media>
            <Media.Item>
              <Heading size={4}>{person.name}</Heading>
              {person.title && (
                <Heading subtitle size={6}>
                  {person.title}
                </Heading>
              )}
            </Media.Item>
          </Media>
          <Content>{person.bio}</Content>
        </StyledCardContent>
      </StyledCard>
      {isLightboxOpen && (
        <Lightbox
          mainSrc={fluid.src}
          imageTitle={
            person.title ? `${person.name}, ${person.title}` : person.name
          }
          imageCaption={person.bio}
          enableZoom={false}
          imagePadding={24}
          wrapperClassName="avatar-lightbox"
          onCloseRequest={() => toggleLightboxOpen(false)}
        />
      )}
    </>
  );
};

Avatar.propTypes = {
  person: PropTypes.shape({
    picture: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
};

export default Avatar;
