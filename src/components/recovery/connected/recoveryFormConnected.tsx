import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { RecoveryForm } from '../components';

interface StateProps { }

interface DispatchProps { }

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({});

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({}, dispatch);

export const RecoveryFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(RecoveryForm)
);
