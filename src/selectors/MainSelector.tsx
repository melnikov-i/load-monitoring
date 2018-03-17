import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const MainMenuWasRequestedFromAPISelector = 
  createSelector(
    ( state: RootState ) => state.main.MainMenuWasRequestedFromAPI,
    ( MainMenuWasRequestedFromAPI ) => MainMenuWasRequestedFromAPI,
  );

export const MainMenuItemsCollectionSelector = createSelector(
    ( state: { main: any } ) => state.main.MainMenuItemsCollection,
    ( MainMenuItemsCollection ) => MainMenuItemsCollection,
  );

export const UserMenuItemsCollectionSelector = createSelector(
    ( state: RootState ) => state.main.UserMenuItemsCollection,
    ( UserMenuItemsCollection ) => UserMenuItemsCollection
  );

export const DevicesMenuWasRequestedFromAPISelector = 
  createSelector(
    ( state: RootState ) => state.main.DevicesMenuWasRequestedFromAPI,
    ( DevicesMenuWasRequestedFromAPI ) => DevicesMenuWasRequestedFromAPI,
  );

export const DevicesMenuItemsCollectionSelector = createSelector(
    ( state: RootState ) => state.main.DevicesMenuItemsCollection,
    ( DevicesMenuItemsCollection ) => DevicesMenuItemsCollection,
  );

export const isDevicesMenuOpenedSelector = createSelector(
    ( state: RootState ) => state.main.isDevicesMenuOpened,
    ( isDevicesMenuOpened ) => isDevicesMenuOpened,
  );

export const isMainMenuOpenedSelector = createSelector(
    ( state: RootState ) => state.main.isMainMenuOpened,
    ( isMainMenuOpened ) => isMainMenuOpened,
  );

export const DroppedMenuButtonClickedIdSelector = createSelector(
    ( state: RootState ) => state.main.DroppedMenuButtonClickedId,
    ( DroppedMenuButtonClickedId ) => DroppedMenuButtonClickedId,
  );

export const isFirefoxInUseSelector = createSelector(
    ( state: RootState ) => state.main.isFirefoxInUse,
    ( isFirefoxInUse ) => isFirefoxInUse,
  );

export const isMenuOpenedOnSmallScreenSelector = createSelector(
    ( state: RootState ) => state.main.isMenuOpenedOnSmallScreen,
    ( isMenuOpenedOnSmallScreen ) => isMenuOpenedOnSmallScreen,
  );

export const PageMenuItemActiveLabelSelector = createSelector(
    ( state: RootState ) => state.main.PageMenuItemActiveLabel,
    ( PageMenuItemActiveLabel ) => PageMenuItemActiveLabel,
  );