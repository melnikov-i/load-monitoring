import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const MainMenuModel =
( state: RootState ) => (
  state.main.MainMenuModel
);

const DevicesMenuModel = 
( state: RootState ) => (
  state.main.DevicesMenuModel
);

const isOpened =
( state: RootState ) => (
  state.main.isOpened
);

export const MainMenuModelSelector = createSelector(
  [MainMenuModel],
  ( MainMenuModel ) => MainMenuModel
);

export const DevicesMenuModelSelector = createSelector(
  [DevicesMenuModel],
  ( DevicesMenuModel ) => DevicesMenuModel
);

export const isOpenedSelector = createSelector(
  [isOpened],
  ( isOpened ) => isOpened
);