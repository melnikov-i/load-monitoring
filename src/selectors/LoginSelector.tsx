import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const LoginValueSelector = createSelector(
  ( state: RootState ) => state.login.LoginValue,
  ( LoginValue ) => LoginValue,
);

export const PasswordValueSelector = createSelector(
  ( state: RootState ) => state.login.PasswordValue,
  ( PasswordValue ) => PasswordValue,
);

export const isAuthorizedSelector = createSelector(
  ( state: RootState ) => state.login.isAuthorized,
  ( isAuthorized ) => isAuthorized,
);

export const LoginFailedSelector = createSelector(
  ( state: RootState ) => state.login.LoginFailed,
  ( LoginFailed ) => LoginFailed,
);