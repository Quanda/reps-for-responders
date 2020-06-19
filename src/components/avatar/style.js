import styled from 'styled-components';
import Card from 'react-bulma-components/lib/components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledCard = styled(Card)`
  height: 670px;
  overflow: hidden;
`;

export const StyledCardImage = styled(Card.Image)`
  min-height: 275px;

  img {
    object-fit: cover;
  }
`;

export const StyledCardContent = styled(Card.Content)`
  position: relative;
  max-height: 375px;
  overflow: auto;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin: ${(props) => (props.nomargin ? '0' : '0 12px 0 0')};
  color: ${(props) => props.color || 'inherit'};
`;

export const StyledModalWrapper = styled.div`
  display: inline-flex;
  position: sticky;
  top: 0;
  z-index: 1;
  cursor: pointer;
  outline: 0;
  width: 100%;
  justify-content: flex-end;
`;
