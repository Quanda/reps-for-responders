import styled from 'styled-components';

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: ${props => props.theme.colors.blue.primary};
  border-radius: 5px;
  border: none;
  color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.colors.blue.dark};
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const Close = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 4rem;
  font-weight: normal;
  padding: 1rem;
  line-height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
`;
