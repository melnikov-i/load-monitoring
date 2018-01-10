import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import {
  syncActionCreators,
  asyncActionCreators
} from '@src/redux/devices';

import { Devices } from '@src/components';

import {
  DevicesTableInterface,
  DevicesButtonClickedIdType
} from '@src/interfaces';

import {
  DevicesTableItemsCollectionSelector,
  DevicesItemsWasRequestedFromAPISelector,
  DevicesActionButtonClickedIdSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    DevicesTableItemsCollection: DevicesTableInterface[],
    DevicesItemsWasRequestedFromAPI: boolean,
    DevicesActionButtonClickedId: DevicesButtonClickedIdType,
  }>({
    DevicesTableItemsCollection: DevicesTableItemsCollectionSelector,
    DevicesItemsWasRequestedFromAPI: DevicesItemsWasRequestedFromAPISelector,
    DevicesActionButtonClickedId: DevicesActionButtonClickedIdSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDevicesItemsRequestFromAPI: 
    asyncActionCreators.makeDevicesItemsRequestFromAPI,
  changeDevicesActionButtonClickedId: 
    syncActionCreators.changeDevicesActionButtonClickedId,
}, dispatch);

export const DevicesConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Devices)
  );