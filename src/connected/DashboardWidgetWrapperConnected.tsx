import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { DashboardWidgetWrapper } from '@src/components';

const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({}, dispatch);

export const DashboardWidgetWrapperConnected = connect(
  mapStateToProps, mapDispatchToProps)(DashboardWidgetWrapper);