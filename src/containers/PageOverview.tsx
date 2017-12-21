import * as React from 'react';
// import styled from 'styled-components';

import { Spinner } from '@src/components';

// const Styledh3 = styled.h3`
//   font-size: 16px;
// `;

// const StyledDiv = styled.div`
//   background-color: rgba(0, 0, 255, .4);
//   min-height: 100%;

// `;

export const PageOverview: React.SFC<undefined> = () => {
  return (
    <Spinner
      width={5}
      color={'#2f4050'}
      bgColor={'#f3f3f4'}
    />
  );
}