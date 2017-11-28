import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';




import { /*syncActionCreators,*/ asyncActionCreators } from '@src/redux/common';
import { CPUCommonLoad } from '@src/components';

import {
  currentDataCollectionSelector,
  dataAddInLastFieldSelector,
  currentDataCollectionItemSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  currentDataCollection: currentDataCollectionSelector,
  dataAddInLastField: dataAddInLastFieldSelector,
  currentDataCollectionItem: currentDataCollectionItemSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeRequestToAPI: asyncActionCreators.makeRequestToAPI,
  doDeferredIndexIncrement: asyncActionCreators.doDeferredIndexIncrement,
}, dispatch);

export const CPUCommonLoadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(CPUCommonLoad);