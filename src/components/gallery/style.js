import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  height: 420px;

  .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    border-radius: 4px;
  }

  .next,
  .prev {
    position: absolute;
    background: transparent;
    color: var(--theme-gray);
    border: 0;
    top: calc(50% - 20px);
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-size: 24px;
    z-index: 2;
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }
`;
