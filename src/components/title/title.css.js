import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '600';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2rem';
      default:
        return '1.8rem';
    }
  }};
  line-height: 1.2;
  letter-spacing: 1px;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
