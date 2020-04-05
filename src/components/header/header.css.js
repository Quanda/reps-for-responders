import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  ${MEDIA.DESKTOP`
    flex-direction: column;
    align-items: center;
  `};

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  #brand {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      height: 100px;
      margin: 0 16px 0 0;
    }

    ${MEDIA.DESKTOP`
      flex-direction: column;
      margin-bottom: 2em;

      img {
        height: 75px;
        margin: 0 0 16px 0;
      }
    `}
  }
`;
