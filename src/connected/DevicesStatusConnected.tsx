import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
} from '@src/redux/devices';

import { DevicesStatus } from '@src/components';

import {
  LoadParamsInterface,
  DevicesLoadCurrentItemInterface
} from '@src/interfaces';

import {
  DevicesLoadCurrentItemSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState, 
DevicesLoadCurrentItemInterface, {
    DevicesLoadCurrentItem: LoadParamsInterface,
  }>({
    DevicesLoadCurrentItem: DevicesLoadCurrentItemSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
}, dispatch);

export const DevicesStatusConnected = 
  connect(mapStateToProps, mapDispatchToProps)(DevicesStatus);