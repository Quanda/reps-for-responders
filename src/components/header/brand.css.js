import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 2rem;

  ${MEDIA.DESKTOP`
    flex-direction: column;
    align-items: center;
    text-align: center;
  `};

  #brand {
    font-family: Rockwell;
    text-transform: uppercase;
    font-size: 2.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    
    img {
      height: 75px;
      margin: 0 16px 0 0;
      border-radius: 9999px;
    }

    ${MEDIA.DESKTOP`
      flex-direction: column;

      img {
        height: 75px;
        margin: 0 0 16px 0;
      }
    `}
  }
`;
