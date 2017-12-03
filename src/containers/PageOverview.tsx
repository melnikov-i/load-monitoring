import * as React from 'react';
import styled from 'styled-components';

const Styledh3 = styled.h3`
  font-size: 16px;
`;


export const PageOverview: React.SFC<undefined> = () => {
  return (
    <div>
      <Styledh3>PageOverwiew</Styledh3>
    </div>
  );
}