import * as React from 'react';

import LoginConnected from '@src/connected/LoginConnected.usage';

interface LoginContainerProps {}

export const LoginContainer: React.SFC<LoginContainerProps> = () => {
  return (<LoginConnected />);
};