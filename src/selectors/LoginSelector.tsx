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