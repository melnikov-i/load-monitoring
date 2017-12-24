import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import { syncActionCreators, asyncActionCreators } from '@src/redux/main';
import { Main } from '@src/components';

import {
  MainMenuLinksInterface,
  IsOpenedInterface,
  UserMenuInterface,
  IsOpenedUserMenuInterface,
} from '@src/interfaces';

import {
  MainMenuWasRequestedFromAPISelector,
  MainMenuModelSelector,
  UserMenuModelSelector,
  DevicesMenuWasRequestedFromAPISelector,
  DevicesMenuModelSelector,
  isDevicesMenuOpenedSelector,
  isMainMenuOpenedSelector,
  isUserMenuOpenedSeelctor,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    MainMenuWasRequestedFromAPI: boolean,
    MainMenuModel: MainMenuLinksInterface[],
    UserMenuModel: UserMenuInterface,
    DevicesMenuWasRequestedFromAPI: boolean,
    DevicesMenuModel: MainMenuLinksInterface[],
    isDevicesMenuOpened: IsOpenedInterface,
    isMainMenuOpened: IsOpenedInterface,
    isUserMenuOpened: IsOpenedUserMenuInterface,
  }>({
    MainMenuWasRequestedFromAPI: MainMenuWasRequestedFromAPISelector,
    MainMenuModel: MainMenuModelSelector,
    UserMenuModel: UserMenuModelSelector,
    DevicesMenuWasRequestedFromAPI: DevicesMenuWasRequestedFromAPISelector,
    DevicesMenuModel: DevicesMenuModelSelector,
    isDevicesMenuOpened: isDevicesMenuOpenedSelector,
    isMainMenuOpened: isMainMenuOpenedSelector,
    isUserMenuOpened: isUserMenuOpenedSeelctor,
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
    syncActionCreators.doUserMenuOnBigScreenSwitch
}, dispatch);

export const MainConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
  );
