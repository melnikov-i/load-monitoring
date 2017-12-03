import * as React from 'react';

import {
  DashBoardWrapper,
} from '@src/styled';

import DashBoardHeadConnected 
  from '@src/connected/DashBoardHeadConnected.usage';
import DashBoardBodyConnected 
  from '@src/connected/DashBoardBodyConnected.usage';

interface DashBoardProps {

}

export const DashBoard: React.SFC<DashBoardProps> = () => {
  return (
    <DashBoardWrapper>
      <DashBoardHeadConnected />
      <DashBoardBodyConnected />
    </DashBoardWrapper>
  );
};