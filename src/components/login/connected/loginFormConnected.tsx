import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { LoginForm } from '../components';
import { asyncActionCreators } from '@src/redux/login';
import { ILoginRequestPayload } from '@src/core/interfaces';

interface StateProps { }

interface DispatchProps {
  sendUserCredentialToAPI: (payload: ILoginRequestPayload) => any,
 }

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({});

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    sendUserCredentialToAPI: asyncActionCreators.sendUserCredentialToAPI,
  }, dispatch);

export const LoginFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(LoginForm)
);
