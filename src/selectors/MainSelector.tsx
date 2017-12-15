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

const isDevicesMenuOpened =
( state: RootState ) => (
  state.main.isDevicesMenuOpened
);

const isMainMenuOpened =
( state: RootState ) => (
  state.main.isMainMenuOpened
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

export const isDevicesMenuOpenedSelector = createSelector(
  [isDevicesMenuOpened],
  ( isDevicesMenuOpened ) => isDevicesMenuOpened
);

export const isMainMenuOpenedSelector = createSelector(
  [isMainMenuOpened],
  ( isMainMenuOpened ) => isMainMenuOpened
);