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
  font-size: 1.5rem;
  font-weight: ${props => props.isCurrent ? 'bold' : 'initial'};

  & + li {
    margin-left: 2rem;

    ${MEDIA.DESKTOP`
      margin-left: 0;
    `}
  }
`;
