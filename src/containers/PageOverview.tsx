import * as React from 'react';
// import styled from 'styled-components';

import SpinnerConnected from '@src/connected/SpinnerConnected.usage';

// const Styledh3 = styled.h3`
//   font-size: 16px;
// `;

// const StyledDiv = styled.div`
//   background-color: rgba(0, 0, 255, .4);
//   min-height: 100%;

// `;

export const PageOverview: React.SFC<undefined> = () => {
  return (<SpinnerConnected />);
}