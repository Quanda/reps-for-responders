import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${props => props.theme.colors.blue.primary};
  margin-bottom: 28px;

  ${MEDIA.DESKTOP`
    flex-direction: column;
    align-items: center;
  `};

  #brand {
    font-family: Rockwell;
    text-transform: uppercase;
    font-size: 2.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.white.primary};
    
    img {
      height: 100px;
      margin: 0 16px 0 0;
      border-radius: 9999px;
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
