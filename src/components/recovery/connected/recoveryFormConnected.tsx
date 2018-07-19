import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { RecoveryForm } from '../components';
import { asyncActionCreators } from '@src/core/redux/recovery';

interface StateProps { }

interface DispatchProps {
  sendRecoveryToAPI: (payload: any) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({});

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    sendRecoveryToAPI: asyncActionCreators.sendRecoveryToAPI,
  }, dispatch);

export const RecoveryFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(RecoveryForm)
);
