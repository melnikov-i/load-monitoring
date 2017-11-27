import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';

import { actionCreators } from '@src/redux/cpu';
import { CPUCommonLoad } from '@src/components';

import {
  CPUCommonLoadCollectionItemSelector,
  CPUCommonLoadCurrentItemSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  CPUCommonLoadCollectionItem: CPUCommonLoadCollectionItemSelector,
  CPUCommonLoadCurrentItem: CPUCommonLoadCurrentItemSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  getCPUCommonLoadNextItem: actionCreators.getCPUCommonLoadNextItem,
}, dispatch);

export const CPUCommonLoadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(CPUCommonLoad);