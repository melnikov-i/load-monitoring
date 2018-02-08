import styled, { keyframes } from 'styled-components';

const emergence = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MainComponentContent = styled.div`
  margin: 20px 15px;
  box-sizing: border-box;
  background-color: #fff;
  border-top: 2px solid #e7eaec;
  padding: 0 15px;
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;