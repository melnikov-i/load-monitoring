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
  IsOpenedInterface,
  UserMenuInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

import {
  MainMenuWasRequestedFromAPISelector,
  MainMenuItemsCollectionSelector,
  UserMenuItemsCollectionSelector,
  DevicesMenuWasRequestedFromAPISelector,
  DevicesMenuItemsCollectionSelector,
  isDevicesMenuOpenedSelector,
  isMainMenuOpenedSelector,
  DroppedMenuButtonClickedIdSelector,
  isMenuOpenedOnSmallScreenSelector,
  PageMenuItemActiveSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    MainMenuWasRequestedFromAPI: boolean,
    MainMenuItemsCollection: MainMenuLinksInterface[],
    UserMenuItemsCollection: UserMenuInterface,
    DevicesMenuWasRequestedFromAPI: boolean,
    DevicesMenuItemsCollection: MainMenuLinksInterface[],
    isDevicesMenuOpened: IsOpenedInterface,
    isMainMenuOpened: IsOpenedInterface,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
    isMenuOpenedOnSmallScreen: boolean,
    PageMenuItemActive: string,
  }>({
    MainMenuWasRequestedFromAPI: MainMenuWasRequestedFromAPISelector,
    MainMenuItemsCollection: MainMenuItemsCollectionSelector,
    UserMenuItemsCollection: UserMenuItemsCollectionSelector,
    DevicesMenuWasRequestedFromAPI: DevicesMenuWasRequestedFromAPISelector,
    DevicesMenuItemsCollection: DevicesMenuItemsCollectionSelector,
    isDevicesMenuOpened: isDevicesMenuOpenedSelector,
    isMainMenuOpened: isMainMenuOpenedSelector,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedIdSelector,
    isMenuOpenedOnSmallScreen: isMenuOpenedOnSmallScreenSelector,
    PageMenuItemActive: PageMenuItemActiveSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeMainMenuRequestToAPI: 
    asyncActionCreators.makeMainMenuRequestToAPI,
  makeDevicesMenuRequestToAPI: 
    asyncActionCreators.makeDevicesMenuRequestToAPI,
  doMainMenuOnSmallScreenSwitch: 
    syncActionCreators.doMainMenuOnSmallScreenSwitch,  
  doDevicesMenuOnBigScreenSwitch: 
    syncActionCreators.doDevicesMenuOnBigScreenSwitch,
  doDevicesMenuOnMiddleScreenSwitch: 
    syncActionCreators.doDevicesMenuOnMiddleScreenSwitch,
  doDevicesMenuOnSmallScreenSwitch:
    syncActionCreators.doDevicesMenuOnSmallScreenSwitch,
  doBothMenuOnSmallScreenOff: 
    syncActionCreators.doBothMenuOnSmallScreenOff,
  sendLogOutToAPI: loginActionCreators.sendLogOutToAPI,
  changeDroppedMenuClickedId:
    syncActionCreators.changeDroppedMenuClickedId,
  switchMenuOnSmallScreens: 
    syncActionCreators.switchMenuOnSmallScreens,
  switchPageMenuItemActive:
    syncActionCreators.switchPageMenuItemActive,
}, dispatch);

export const MainConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
  );
