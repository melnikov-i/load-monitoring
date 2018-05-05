import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
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
  LogOunInterface
} from '@src/interfaces';

interface StateProps {
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
}

interface DispatchProps {
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  sendLogOutToAPI: ( payload: LogOunInterface ) => any,
  changeDroppedMenuClickedId: 
    ( payload: DroppedMenuButtonClickedType ) => any,
  switchMenuOnSmallScreens: () => any,
  switchPageMenuItemActive: ( payload: string ) => any,
  switchPageMenuItemMultiActive: ( payload: string ) => any,
}

interface OwnProps {}

const mapStateToProps: 
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    MainMenuWasRequestedFromAPI: 
      ( state: RootState ) => state.main.MainMenuWasRequestedFromAPI,
    AllMenusWasResponsedFromAPI: 
      ( state: RootState ) => state.main.AllMenusWasResponsedFromAPI,
    MainMenuItemsCollection: 
      ( state: RootState ) => state.main.MainMenuItemsCollection,
    UserMenuItemsCollection: 
      ( state: RootState ) => state.main.UserMenuItemsCollection,
    DevicesMenuWasRequestedFromAPI: 
      ( state: RootState ) => state.main.DevicesMenuWasRequestedFromAPI,
    DevicesMenuItemsCollection: 
      ( state: RootState ) => state.main.DevicesMenuItemsCollection,
    DroppedMenuButtonClickedId: 
      ( state: RootState ) => state.main.DroppedMenuButtonClickedId,
    isMenuOpenedOnSmallScreen: 
      ( state: RootState ) => state.main.isMenuOpenedOnSmallScreen,
    PageMenuItemActive: 
      ( state: RootState ) => state.main.PageMenuItemActive,
    PageMenuItemMultiActive: 
      ( state: RootState ) => state.main.PageMenuItemMultiActive,
  });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> =
( dispatch: Dispatch ) => bindActionCreators({
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
  withRouter(connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(Main)
  );
