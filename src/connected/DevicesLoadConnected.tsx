import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  asyncActionCreators
} from '@src/redux/devices';

import { DevicesLoad } from '@src/components';

import {
  DevicesLoadInterface,
} from '@src/interfaces';

import {
  DevicesLoadCollectionSelector,
  
  TestValueSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    DevicesLoadCollection: DevicesLoadInterface[],

    TestValue: number,
  }>({
    TestValue: TestValueSelector,
    
    DevicesLoadCollection: DevicesLoadCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  

  makeTest: asyncActionCreators.makeTest,
}, dispatch);

export const DevicesLoadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(DevicesLoad);