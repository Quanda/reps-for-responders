import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    ${MEDIA.DESKTOP`
      flex-direction: column;
      align-items: flex-start;
      height: 10em;
      justify-content: space-between;
    `}
  }
`;

export const ListItem = styled.li`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: ${props => props.isCurrent ? 'bold' : 'inherit'};

  a {
    color: ${props => props.isCurrent ? props.theme.colors.yellow.primary : props.theme.colors.white.primary};
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.yellow.primary};
    }
  }

  & + li {
    margin-left: 2rem;

    ${MEDIA.DESKTOP`
      margin-left: 0;
    `}
  }
`;
