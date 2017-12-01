import * as React from 'react';
import styled from 'styled-components';

import {
  DashBoard,
} from '@src/containers';

// import CPUCommonLoadConnected from '@src/connected/CPUCommonLoadConnected.usage'

const Wrapper = styled.div`
  max-width: 960px;
  background: #aaa;
  width: 100%;
  margin: 50px auto 0;
`;

// const Header = styled.h1`
//   font-family: 'Verdana', sans-serif;
//   font-size: 16px;
//   font-weight: normal;
//   color: #505050;
// `;

export const App = () => {
  return (
    <Wrapper>
      <h1>Hello, App</h1>
      <DashBoard />
    </Wrapper>
  );
}

/*
    <Wrapper>
      <Header>CPU Common Load</Header>
      <CPUCommonLoadConnected />
    </Wrapper>

*/