import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: auto;

  ${MEDIA.DESKTOP`
    max-width: 90%;
  `};
`;
