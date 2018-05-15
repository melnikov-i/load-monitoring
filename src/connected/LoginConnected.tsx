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
  IRegistrationForm,
  IRegistrationFormValidation
} from '@src/interfaces';

interface StateProps {
  loginValue: LoginFormInterface['login'],
  passwordValue: LoginFormInterface['password'],
  loginFormState: LoginFormStateInterface,
  registrationEmailValue: IRegistrationForm['email'],
  registrationPasswordValue: IRegistrationForm['password'],
  registrationConfirmPasswordValue: IRegistrationForm['password'],
  registrationAgreementValue: boolean,
  registrationFormValidation: IRegistrationFormValidation,
  reCaptcha: string,
}

interface DispatchProps {
  changeLoginValue: ( payload: LoginFormInterface['login'] ) => any,
  changePasswordValue: (payload: LoginFormInterface['password']) => any,
  changeConfirmPasswordValue: ( payload: LoginFormInterface['password'] ) => any,
  sendUserCredentialToAPI: ( payload: LoginFormInterface ) => any,
  handleInputEmailEvent: (payload: IRegistrationForm['email']) => any,
  updateRecaptchaValue: (payload: string) => any,
  switchAgreementCheckboxValue: () => any,
}

interface OwnProps {}

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    loginValue: ( state: RootState ) => state.login.loginValue,
    passwordValue: (state: RootState) => state.login.passwordValue,
    loginFormState: ( state: RootState ) => state.login.loginFormState,
    registrationEmailValue: ( state: RootState ) => 
      state.login.registrationEmailValue,
    registrationPasswordValue: (state: RootState) =>
      state.login.registrationPasswordValue,
    registrationConfirmPasswordValue: ( state: RootState ) => 
      state.login.registrationConfirmPasswordValue,
    registrationAgreementValue: (state: RootState) => 
      state.login.registrationAgreementValue,
    registrationFormValidation: (state: RootState) =>
      state.login.registrationFormValidation,
    reCaptcha: ( state: RootState ) => state.login.reCaptcha,
  });


const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = ( dispatch: Dispatch ) => bindActionCreators({
  changeLoginValue: syncActionCreators.changeLoginValue,
  changePasswordValue: syncActionCreators.changePasswordValue,
  changeConfirmPasswordValue: syncActionCreators.changeConfirmPasswordValue,
  sendUserCredentialToAPI: asyncActionCreators.sendUserCredentialToAPI,
  handleInputEmailEvent: asyncActionCreators.handleInputEmailEvent,
  updateRecaptchaValue: syncActionCreators.updateRecaptchaValue,
  switchAgreementCheckboxValue: syncActionCreators.switchAgreementCheckboxValue,
}, dispatch);

export const LoginConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps
  )(Login);