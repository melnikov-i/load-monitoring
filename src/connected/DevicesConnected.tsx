import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
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

import {
  DevicesTableItemsCollectionSelector,
  DevicesItemsWasRequestedFromAPISelector,
  DroppedMenuButtonClickedIdSelector,
  isFirefoxInUseSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    DevicesTableItemsCollection: DevicesTableInterface[],
    DevicesItemsWasRequestedFromAPI: boolean,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
    isFirefoxInUse: boolean,
  }>({
    DevicesTableItemsCollection: DevicesTableItemsCollectionSelector,
    DevicesItemsWasRequestedFromAPI: DevicesItemsWasRequestedFromAPISelector,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedIdSelector,
    isFirefoxInUse: isFirefoxInUseSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDevicesItemsRequestFromAPI: 
    asyncActionCreators.makeDevicesItemsRequestFromAPI,
  changeDroppedMenuClickedId: 
    mainActionCreators.changeDroppedMenuClickedId,
  switchPageMenuItemActive: mainActionCreators.switchPageMenuItemActive,
}, dispatch);

export const DevicesConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Devices)
  );