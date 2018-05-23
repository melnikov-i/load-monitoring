import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { Login } from '@src/components';
import { syncActionCreators, asyncActionCreators } from '@src/redux/login';

import {
  LoginFormInterface,
  LoginFormStateInterface,
} from '@src/interfaces';

interface StateProps {
  loginValue: LoginFormInterface['login'],
  passwordValue: LoginFormInterface['password'],
  loginFormState: LoginFormStateInterface,
}

interface DispatchProps {
  changeLoginValue: (payload: LoginFormInterface['login']) => any,
  changePasswordValue: (payload: LoginFormInterface['password']) => any,
  sendUserCredentialToAPI: (payload: LoginFormInterface) => any,
}

interface OwnProps {}

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    loginValue: ( state: RootState ) => state.login.loginValue,
    passwordValue: (state: RootState) => state.login.passwordValue,
    loginFormState: ( state: RootState ) => state.login.loginFormState,
  });


const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = ( dispatch: Dispatch ) => bindActionCreators({
  changeLoginValue: syncActionCreators.changeLoginValue,
  changePasswordValue: syncActionCreators.changePasswordValue,
  sendUserCredentialToAPI: asyncActionCreators.sendUserCredentialToAPI,  
}, dispatch);

export const LoginConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps
  )(Login);