import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const CircularSpinnerModel =
( state: RootState ) => (
  state.spinner.CircularSpinnerModel
);

export const CircularSpinnerModelSelector = createSelector(
  [CircularSpinnerModel],
  ( CircularSpinnerModel ) => CircularSpinnerModel
);