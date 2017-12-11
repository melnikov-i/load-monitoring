import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';

import { syncActionCreators, asyncActionCreators } from '@src/redux/main';
import { Main } from '@src/components';

import {
  MainMenuWasRequestedFromAPISelector,
  MainMenuModelSelector,
  DevicesMenuWasRequestedFromAPISelector,
  DevicesMenuModelSelector,
  isOpenedSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  MainMenuWasRequestedFromAPI: MainMenuWasRequestedFromAPISelector,
  MainMenuModel: MainMenuModelSelector,
  DevicesMenuWasRequestedFromAPI: DevicesMenuWasRequestedFromAPISelector,
  DevicesMenuModel: DevicesMenuModelSelector,
  isOpened: isOpenedSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeMainMenuRequestToAPI: 
    asyncActionCreators.makeMainMenuRequestToAPI,
  makeDevicesMenuRequestToAPI: 
    asyncActionCreators.makeDevicesMenuRequestToAPI,
  doDevicesMenuViewSwitch: syncActionCreators.doDevicesMenuViewSwitch,
}, dispatch);

export const MainConnected = 
  connect(mapStateToProps, mapDispatchToProps)(Main);  
