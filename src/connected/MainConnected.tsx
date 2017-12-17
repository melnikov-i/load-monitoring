import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';

import { syncActionCreators, asyncActionCreators } from '@src/redux/main';
import { Main } from '@src/components';

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

const mapStateToProps = createStructuredSelector({
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
  connect(mapStateToProps, mapDispatchToProps)(Main);  
