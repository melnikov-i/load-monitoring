import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import { syncActionCreators, asyncActionCreators } from '@src/redux/main';
import { asyncActionCreators as loginActionCreators } from '@src/redux/login';
import { syncActionCreators as devicesActionCreators } from '@src/redux/devices'
import { Main } from '@src/components';

import {
  MainMenuLinksInterface,
  IsOpenedInterface,
  UserMenuInterface,
  IsOpenedUserMenuInterface,
  DevicesButtonClickedIdType
} from '@src/interfaces';

import {
  MainMenuWasRequestedFromAPISelector,
  MainMenuItemsCollectionSelector,
  UserMenuItemsCollectionSelector,
  DevicesMenuWasRequestedFromAPISelector,
  DevicesMenuItemsCollectionSelector,
  isDevicesMenuOpenedSelector,
  isMainMenuOpenedSelector,
  isUserMenuOpenedSeelctor,
  DevicesActionButtonClickedIdSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    MainMenuWasRequestedFromAPI: boolean,
    MainMenuItemsCollection: MainMenuLinksInterface[],
    UserMenuItemsCollection: UserMenuInterface,
    DevicesMenuWasRequestedFromAPI: boolean,
    DevicesMenuItemsCollection: MainMenuLinksInterface[],
    isDevicesMenuOpened: IsOpenedInterface,
    isMainMenuOpened: IsOpenedInterface,
    isUserMenuOpened: IsOpenedUserMenuInterface,
    DevicesActionButtonClickedId: DevicesButtonClickedIdType,
  }>({
    MainMenuWasRequestedFromAPI: MainMenuWasRequestedFromAPISelector,
    MainMenuItemsCollection: MainMenuItemsCollectionSelector,
    UserMenuItemsCollection: UserMenuItemsCollectionSelector,
    DevicesMenuWasRequestedFromAPI: DevicesMenuWasRequestedFromAPISelector,
    DevicesMenuItemsCollection: DevicesMenuItemsCollectionSelector,
    isDevicesMenuOpened: isDevicesMenuOpenedSelector,
    isMainMenuOpened: isMainMenuOpenedSelector,
    isUserMenuOpened: isUserMenuOpenedSeelctor,
    DevicesActionButtonClickedId: DevicesActionButtonClickedIdSelector,
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
  doUserMenuOnBigScreenSwitch: 
    syncActionCreators.doUserMenuOnBigScreenSwitch,
  doUserMenuOnBigScreenOff: 
    syncActionCreators.doUserMenuOnBigScreenOff,
  sendLogOutToAPI: loginActionCreators.sendLogOutToAPI,
  changeDevicesActionButtonClickedId: 
    devicesActionCreators.changeDevicesActionButtonClickedId,
}, dispatch);

export const MainConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
  );
