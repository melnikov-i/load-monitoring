import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Login } from '@src/components';
import { syncActionCreators, asyncActionCreators } from '@src/redux/login';

import {
  LoginFormInterface,
  LoginFormStateInterface,
  IRegistrationForm
} from '@src/interfaces';

interface StateProps {
  LoginValue: LoginFormInterface['login'],
  PasswordValue: LoginFormInterface['password'],
  LoginFormState: LoginFormStateInterface,
  EMailValue: IRegistrationForm['email'],
  registrationFormStateType: string,
}

interface DispatchProps {
  changeLoginValue: ( payload: LoginFormInterface['login'] ) => any,
  changePasswordValue: ( payload: LoginFormInterface['password'] ) => any,
  sendUserCredentialToAPI: ( payload: LoginFormInterface ) => any,
  handleInputEmailEvent: (payload: IRegistrationForm['email']) => any,
}

interface OwnProps {}

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    LoginValue: ( state: RootState ) => state.login.LoginValue,
    PasswordValue: ( state: RootState ) => state.login.PasswordValue,
    LoginFormState: ( state: RootState ) => state.login.LoginFormState,
    EMailValue: ( state: RootState ) => state.login.EMailValue,
    registrationFormStateType:
      ( state: RootState ) => state.login.registrationFormStateType,
  });


const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = ( dispatch: Dispatch ) => bindActionCreators({
  changeLoginValue: syncActionCreators.changeLoginValue,
  changePasswordValue: syncActionCreators.changePasswordValue,
  sendUserCredentialToAPI: asyncActionCreators.sendUserCredentialToAPI,
  handleInputEmailEvent: asyncActionCreators.handleInputEmailEvent,
}, dispatch);

export const LoginConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps
  )(Login);