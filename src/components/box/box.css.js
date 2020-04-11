import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.white.primary};
  color: ${props => props.theme.colors.blue.dark};
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
