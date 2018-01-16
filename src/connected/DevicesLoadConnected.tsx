import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  // asyncActionCreators
} from '@src/redux/devices';

import { DevicesLoad } from '@src/components';

import {
  LoadParamsInterface,
} from '@src/interfaces';

import {
  DevicesLoadCurrentItemSelector,
  DevicesLoadCurrentItemInterface
  // DevicesLoadCollectionSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState, {
    DevicesLoadCurrentItem: LoadParamsInterface,
    // DevicesLoadCollection: LoadParamsInterface,
  }>({
    DevicesLoadCurrentItem: DevicesLoadCurrentItemSelector,

    // DevicesLoadCollection: DevicesLoadCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  // getCurrentDeviceLoadParamsFromAPI: 
    // asyncActionCreators.getCurrentDeviceLoadParamsFromAPI,
}, dispatch);

export const DevicesLoadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(DevicesLoad);