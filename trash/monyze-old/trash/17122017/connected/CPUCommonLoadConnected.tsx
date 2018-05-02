import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';




import { /*syncActionCreators,*/ asyncActionCreators } from '@src/redux/common';
import { CPUCommonLoad } from '@src/components';

import {
  CommonDataModelSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  CommonDataModel: CommonDataModelSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeFirstRequestToAPI: asyncActionCreators.makeFirstRequestToAPI,
  makeNextRequestToAPI: asyncActionCreators.makeNextRequestToAPI,
  doDeferredIndexIncrement: asyncActionCreators.doDeferredIndexIncrement,
}, dispatch);

export const CPUCommonLoadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(CPUCommonLoad);