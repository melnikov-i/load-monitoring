import * as React from 'react';

import AppConnected from '@src/connected/AppConnected.usage';

interface AppContainerProps {}

export const AppContainer: React.SFC<AppContainerProps> = () => {
  return (<AppConnected />);
};