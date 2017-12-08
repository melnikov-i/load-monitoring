import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const MainMenuModel =
( state: RootState ) => (
  state.main.MainMenuModel
);

const isCompositeActive =
( state: RootState ) => (
  state.main.isCompositeActive
);

export const MainMenuModelSelector = createSelector(
  [MainMenuModel],
  ( MainMenuModel ) => MainMenuModel
);

export const isCompositeActiveSelector = createSelector(
  [isCompositeActive],
  ( isCompositeActive ) => isCompositeActive
);