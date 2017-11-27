import * as React from 'react';
import styled from 'styled-components';

import CPUCommonLoadConnected from '@src/connected/CPUCommonLoadConnected.usage'

const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  margin: 50px auto 0;
  background-color: #eee;
`;

const Header = styled.h1`
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #505050;
`;

export const App = () => {
  return (
    <Wrapper>
      <Header>CPU Common Load</Header>
      <CPUCommonLoadConnected />
    </Wrapper>
  );
}