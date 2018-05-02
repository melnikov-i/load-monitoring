import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  asyncActionCreators
} from '@src/redux/devices';

import { DevicesLoad } from '@src/components';

import {
  // LoadParamsInterface,
  DevicesLoadCurrentItemInterface
} from '@src/interfaces';

import {
  // DevicesLoadCurrentItemSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState, 
DevicesLoadCurrentItemInterface, {
    // DevicesLoadCurrentItem: LoadParamsInterface,
  }>({
    // DevicesLoadCurrentItem: DevicesLoadCurrentItemSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDevicesLoadItemRequestFromAPI: 
    asyncActionCreators.makeDevicesLoadItemRequestFromAPI,
}, dispatch);

export const DevicesLoadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(DevicesLoad);