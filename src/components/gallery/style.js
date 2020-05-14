import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;

  .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img {
    border-radius: 6px;
  }

  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    z-index: 2;
  }

  .next {
    right: 10px;
  }
  
  .prev {
    left: 10px;
    transform: scale(-1);
  }
`;
