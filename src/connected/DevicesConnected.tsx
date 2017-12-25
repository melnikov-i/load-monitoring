import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import {
  // syncActionCreators,
  asyncActionCreators
} from '@src/redux/devices';

import { Devices } from '@src/components';

import {
  DevicesTableInterface
} from '@src/interfaces';

import {
  DevicesTableItemsCollectionSelector,
  DevicesItemsWasRequestedFromAPISelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    DevicesTableItemsCollection: DevicesTableInterface[],
    DevicesItemsWasRequestedFromAPI: boolean,
  }>({
    DevicesTableItemsCollection: DevicesTableItemsCollectionSelector,
    DevicesItemsWasRequestedFromAPI: DevicesItemsWasRequestedFromAPISelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDevicesItemsRequestFromAPI: 
    asyncActionCreators.makeDevicesItemsRequestFromAPI
}, dispatch);

export const DevicesConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Devices)
  );