import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const MainMenuWasRequestedFromAPISelector = 
  createSelector(
    ( state: RootState ) => state.main.MainMenuWasRequestedFromAPI,
    ( MainMenuWasRequestedFromAPI ) => MainMenuWasRequestedFromAPI,
  );

export const AllMenusWasResponsedFromAPISelector =
  createSelector(
    ( state: RootState ) => state.main.AllMenusWasResponsedFromAPI,
    ( AllMenusWasResponsedFromAPI ) => AllMenusWasResponsedFromAPI,
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

export const PageMenuItemActiveSelector = createSelector(
    ( state: RootState ) => state.main.PageMenuItemActive,
    ( PageMenuItemActive ) => PageMenuItemActive,
  );

export const PageMenuItemMultiActiveSelector = createSelector(
    ( state: RootState ) => state.main.PageMenuItemMultiActive,
    ( PageMenuItemMultiActive ) => PageMenuItemMultiActive,
  );