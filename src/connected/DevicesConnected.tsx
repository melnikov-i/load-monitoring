import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import {
  asyncActionCreators,
  // syncActionCreators
} from '@src/redux/devices';
import { 
  syncActionCreators as mainActionCreators 
} from '@src/redux/main'

import { Devices } from '@src/components';

import {
  DevicesTableInterface,
  DroppedMenuButtonClickedType,
  // LoadParamsInterface
} from '@src/interfaces';

import {
  DevicesTableItemsCollectionSelector,
  DevicesItemsWasRequestedFromAPISelector,
  DroppedMenuButtonClickedIdSelector,
  isFirefoxInUseSelector,
  // DevicesLoadItemsWasRequestedFromAPISelector,
  // DevicesLoadCollectionSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    DevicesTableItemsCollection: DevicesTableInterface[],
    DevicesItemsWasRequestedFromAPI: boolean,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
    isFirefoxInUse: boolean,
    // DevicesLoadItemsWasRequestedFromAPI: boolean,
    // DevicesLoadCollection: LoadParamsInterface,
  }>({
    DevicesTableItemsCollection: DevicesTableItemsCollectionSelector,
    DevicesItemsWasRequestedFromAPI: DevicesItemsWasRequestedFromAPISelector,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedIdSelector,
    isFirefoxInUse: isFirefoxInUseSelector,
    // DevicesLoadItemsWasRequestedFromAPI: 
    //   DevicesLoadItemsWasRequestedFromAPISelector,
    // DevicesLoadCollection: DevicesLoadCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDevicesItemsRequestFromAPI: 
    asyncActionCreators.makeDevicesItemsRequestFromAPI,
  changeDroppedMenuClickedId: 
    mainActionCreators.changeDroppedMenuClickedId,
  // makeDevicesLoadItemsRequestFromAPI:
  //   asyncActionCreators.makeDevicesLoadItemsRequestFromAPI,
  // addDevicesInDevicesLoadCollection:
  //   syncActionCreators.addDevicesInDevicesLoadCollection,
}, dispatch);

export const DevicesConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Devices)
  );