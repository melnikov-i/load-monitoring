import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import { syncActionCreators, asyncActionCreators } from '@src/redux/main';
import { asyncActionCreators as loginActionCreators } from '@src/redux/login';

import { Main } from '@src/components';

import {
  MainMenuLinksInterface,
  UserMenuInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

import {
  MainMenuWasRequestedFromAPISelector,
  AllMenusWasResponsedFromAPISelector,
  MainMenuItemsCollectionSelector,
  UserMenuItemsCollectionSelector,
  DevicesMenuWasRequestedFromAPISelector,
  DevicesMenuItemsCollectionSelector,
  DroppedMenuButtonClickedIdSelector,
  isMenuOpenedOnSmallScreenSelector,
  PageMenuItemActiveSelector,
  PageMenuItemMultiActiveSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    MainMenuWasRequestedFromAPI: boolean,
    AllMenusWasResponsedFromAPI: boolean,
    MainMenuItemsCollection: MainMenuLinksInterface[],
    UserMenuItemsCollection: UserMenuInterface,
    DevicesMenuWasRequestedFromAPI: boolean,
    DevicesMenuItemsCollection: MainMenuLinksInterface[],
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
    isMenuOpenedOnSmallScreen: boolean,
    PageMenuItemActive: string,
    PageMenuItemMultiActive: string,
  }>({
    MainMenuWasRequestedFromAPI: MainMenuWasRequestedFromAPISelector,
    AllMenusWasResponsedFromAPI: AllMenusWasResponsedFromAPISelector,
    MainMenuItemsCollection: MainMenuItemsCollectionSelector,
    UserMenuItemsCollection: UserMenuItemsCollectionSelector,
    DevicesMenuWasRequestedFromAPI: DevicesMenuWasRequestedFromAPISelector,
    DevicesMenuItemsCollection: DevicesMenuItemsCollectionSelector,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedIdSelector,
    isMenuOpenedOnSmallScreen: isMenuOpenedOnSmallScreenSelector,
    PageMenuItemActive: PageMenuItemActiveSelector,
    PageMenuItemMultiActive: PageMenuItemMultiActiveSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeMainMenuRequestToAPI: 
    asyncActionCreators.makeMainMenuRequestToAPI,
  makeDevicesMenuRequestToAPI: 
    asyncActionCreators.makeDevicesMenuRequestToAPI,
  sendLogOutToAPI: loginActionCreators.sendLogOutToAPI,
  changeDroppedMenuClickedId:
    syncActionCreators.changeDroppedMenuClickedId,
  switchMenuOnSmallScreens: 
    syncActionCreators.switchMenuOnSmallScreens,
  switchPageMenuItemActive:
    syncActionCreators.switchPageMenuItemActive,
  switchPageMenuItemMultiActive:
    syncActionCreators.switchPageMenuItemMultiActive,
}, dispatch);

export const MainConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
  );