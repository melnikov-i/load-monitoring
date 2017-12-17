import * as React from 'react';
import { Route } from 'react-router-dom';

import {
  DashBoardContent
} from '@src/styled';

import OverviewConnected from '@src/connected/OverviewConnected.usage';

export const DashBoardBody: React.SFC<undefined> = () => {
  return (
    <DashBoardContent>
        <Route
          path={'/dashboard/overview'}
          component={OverviewConnected} />
        
      

    </DashBoardContent>
  );
};

/*
        <Route
          exact
          path={'/dashboard/cpuplusmemory'}
          component={} />
        <Route
          exact
          path={'/dashboard/hdd'}
          component={} />
        <Route
          exact
          path={'/dashboard/network'}
          component={} />
        <Route
          exact
          path={'/dashboard/system'}
          component={} />
*/