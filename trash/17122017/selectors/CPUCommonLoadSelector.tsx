import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const CommonDataModel =
( state: RootState ) => (
  state.common.CommonDataModel
);

export const CommonDataModelSelector = createSelector(
  [CommonDataModel],
  ( CommonDataModel ) => CommonDataModel
);