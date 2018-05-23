import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';
import { withRouter } from 'react-router-dom';

import {
  asyncActionCreators,
} from '@src/redux/devices';
import { 
  syncActionCreators as mainActionCreators 
} from '@src/redux/main';

import { Devices } from '@src/components';

import {
  DevicesTableInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

interface StateProps {
  DevicesTableItemsCollection: DevicesTableInterface[],
  DevicesItemsWasRequestedFromAPI: boolean,
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  isFirefoxInUse: boolean,
}

interface DispatchProps {
  makeDevicesItemsRequestFromAPI: () => any,
  changeDroppedMenuClickedId: (payload: DroppedMenuButtonClickedType) => any,
  switchPageMenuItemActive: (payload: string) => any,
}

interface OwnProps {}


const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    DevicesTableItemsCollection:
      ( state: RootState ) => state.devices.DevicesTableItemsCollection,
    DevicesItemsWasRequestedFromAPI:
      ( state: RootState ) => state.devices.DevicesItemsWasRequestedFromAPI,
    DroppedMenuButtonClickedId:
      ( state: RootState ) => state.main.DroppedMenuButtonClickedId,
    isFirefoxInUse:
      ( state: RootState ) => state.main.isFirefoxInUse,
  });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> =
(dispatch: Dispatch) => bindActionCreators({
  makeDevicesItemsRequestFromAPI: 
    asyncActionCreators.makeDevicesItemsRequestFromAPI,
  changeDroppedMenuClickedId: 
    mainActionCreators.changeDroppedMenuClickedId,
  switchPageMenuItemActive: mainActionCreators.switchPageMenuItemActive,
}, dispatch);

export const DevicesConnected = 
  withRouter(connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(Devices)
  );