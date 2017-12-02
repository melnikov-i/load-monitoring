import * as React from 'react';

import {
  DashBoardTop,
  DashBoardMainHeaderWrapper,
  DashBoardMainHeader,
  DashBoardIntervalsAndSettingsWrapper,
  DashBoardSettingsWrapper,
  DashBoardSettings
} from '@src/styled';

export const DashBoardHead: React.SFC<undefined> = () => {
  return (
    <DashBoardTop>
      <DashBoardMainHeaderWrapper>
        <DashBoardMainHeader>
          {'main'}
        </DashBoardMainHeader>
      </DashBoardMainHeaderWrapper>
      <DashBoardIntervalsAndSettingsWrapper>
        <DashBoardSettingsWrapper>
          <DashBoardSettings href={'http://google.ru/'}>
            {'настройки'}
          </DashBoardSettings>
        </DashBoardSettingsWrapper>
      </DashBoardIntervalsAndSettingsWrapper>
    </DashBoardTop>
  );
};