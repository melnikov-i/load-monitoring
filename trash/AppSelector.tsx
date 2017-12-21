import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const isAuthorizedSelector = createSelector(
  ( state: RootState ) => state.app.isAuthorized,
  ( isAuthorized ) => isAuthorized,
);