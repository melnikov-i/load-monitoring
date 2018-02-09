import styled, { keyframes } from 'styled-components';

import {
  MainComponentContentInterface
} from '@src/interfaces';

export const emergence = keyframes`
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
  margin: ${(props: MainComponentContentInterface) => (
      props.isLogin ? '0' : '20px 15px 70px'
    )
  };
  box-sizing: ${(props: MainComponentContentInterface) => (
      props.isLogin ? 'content-box' : 'border-box'
    )
  };
  padding: ${(props: MainComponentContentInterface) => (
      props.isLogin ? '0' : '0 15px'
    )
  };
  background-color: ${(props: MainComponentContentInterface) => (
      props.bg ? '#fff' : 'transparent'
    )
  };
  border-top: ${(props: MainComponentContentInterface) => (
      props.bg ? '2px solid #e7eaec' : 'none'
    )
  };
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

export const MainComponentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const MainComponentHeader = styled.h2`
  font-size: 16px;
  font-weight: 100;
  color: #676a6c;
  padding: 15px 0;
  border-bottom: 1px solid #e7eaec;
  margin-bottom: 10px;
`;

export const MainErrorText = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #676a6c;
`;