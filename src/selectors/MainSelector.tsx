import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const MainMenuModel =
( state: RootState ) => (
  state.main.MainMenuModel
);

export const MainMenuModelSelector = createSelector(
  [MainMenuModel],
  ( MainMenuModel ) => MainMenuModel
);