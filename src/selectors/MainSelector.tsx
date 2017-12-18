import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const MainMenuWasRequestedFromAPISelector = 
  createSelector(
    ( state: RootState ) => state.main.MainMenuWasRequestedFromAPI,
    ( MainMenuWasRequestedFromAPI ) => MainMenuWasRequestedFromAPI,
  );

export const MainMenuModelSelector = createSelector(
    ( state: { main: any } ) => state.main.MainMenuModel,
    ( MainMenuModel ) => MainMenuModel,
  );

export const UserMenuModelSelector = createSelector(
    ( state: RootState ) => state.main.UserMenuModel,
    ( UserMenuModel ) => UserMenuModel
  );

export const DevicesMenuWasRequestedFromAPISelector = 
  createSelector(
    ( state: RootState ) => state.main.DevicesMenuWasRequestedFromAPI,
    ( DevicesMenuWasRequestedFromAPI ) => DevicesMenuWasRequestedFromAPI,
  );

export const DevicesMenuModelSelector = createSelector(
    ( state: RootState ) => state.main.DevicesMenuModel,
    ( DevicesMenuModel ) => DevicesMenuModel,
  );

export const isDevicesMenuOpenedSelector = createSelector(
    ( state: RootState ) => state.main.isDevicesMenuOpened,
    ( isDevicesMenuOpened ) => isDevicesMenuOpened,
  );

export const isMainMenuOpenedSelector = createSelector(
    ( state: RootState ) => state.main.isMainMenuOpened,
    ( isMainMenuOpened ) => isMainMenuOpened,
  );

export const isUserMenuOpenedSeelctor = createSelector(
    ( state: RootState ) => state.main.isUserMenuOpened,
    ( isUserMenuOpened ) => isUserMenuOpened,
  );