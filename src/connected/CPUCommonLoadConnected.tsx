import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';




import { /*syncActionCreators,*/ asyncActionCreators } from '@src/redux/common';
import { CPUCommonLoad } from '@src/components';

import {
  currentDataCollectionSelector,
  dataAddInLastFieldSelector,
  data1Selector,
  data0Selector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  currentDataCollection: currentDataCollectionSelector,
  dataAddInLastField: dataAddInLastFieldSelector,
  data1: data1Selector,
  data0: data0Selector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeRequestToAPI: asyncActionCreators.makeRequestToAPI,
}, dispatch);

export const CPUCommonLoadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(CPUCommonLoad);