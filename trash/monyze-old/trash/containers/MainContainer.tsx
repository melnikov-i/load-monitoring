/* Удалить */
import * as React from 'react';

import MainConnected from '@src/connected/MainConnected.usage';

interface MainContainerProps {}

export const MainContainer: React.SFC<MainContainerProps> = () => {
  return (<MainConnected />);
};
