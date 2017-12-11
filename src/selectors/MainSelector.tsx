import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const MainMenuWasRequestedFromAPI =
( state: RootState ) => (
  state.main.MainMenuWasRequestedFromAPI
);

const MainMenuModel =
( state: RootState ) => (
  state.main.MainMenuModel
);

const DevicesMenuWasRequestedFromAPI =
( state: RootState ) => (
  state.main.MainMenuWasRequestedFromAPI
);

const DevicesMenuModel = 
( state: RootState ) => (
  state.main.DevicesMenuModel
);

const isOpened =
( state: RootState ) => (
  state.main.isOpened
);

export const MainMenuWasRequestedFromAPISelector = 
  createSelector(
    [MainMenuWasRequestedFromAPI],
    (MainMenuWasRequestedFromAPI) => MainMenuWasRequestedFromAPI
  );

export const MainMenuModelSelector = createSelector(
  [MainMenuModel],
  ( MainMenuModel ) => MainMenuModel
);

export const DevicesMenuWasRequestedFromAPISelector = 
  createSelector(
    [DevicesMenuWasRequestedFromAPI],
    (DevicesMenuWasRequestedFromAPI) => DevicesMenuWasRequestedFromAPI
  );

export const DevicesMenuModelSelector = createSelector(
  [DevicesMenuModel],
  ( DevicesMenuModel ) => DevicesMenuModel
);

export const isOpenedSelector = createSelector(
  [isOpened],
  ( isOpened ) => isOpened
);