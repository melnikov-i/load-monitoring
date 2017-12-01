import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';

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
    <Router hashtype={'slash'} basename={'/'}>
      <DashBoardWrapper>
        <DashBoardHeadConnected />
        <DashBoardBodyConnected />
      </DashBoardWrapper>
    </Router>
  );
};