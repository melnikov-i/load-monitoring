import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  // asyncActionCreators,
  // syncActionCreators,
} from '@src/redux/dashboard';

import { DashboardWidget } from '@src/components';

import {} from '@src/interfaces';

import {} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({}, dispatch);

export const DashboardWidgetConnected = 
  connect(mapStateToProps, mapDispatchToProps)(DashboardWidget);