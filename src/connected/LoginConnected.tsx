import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { syncActionCreators, asyncActionCreators } from '@src/redux/login';
import { Login } from '@src/components';

import {
  LoginFormInterface,
  // LoginInputBorder,
  LoginFormStateInterface,
} from '@src/interfaces';

import {
  LoginValueSelector,
  PasswordValueSelector,
  // LoginFailedSelector,
  LoginFormStateSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    LoginValue: LoginFormInterface['login'],
    PasswordValue: LoginFormInterface['password'],
    // LoginFailed: LoginInputBorder['isValid'],
    LoginFormState: LoginFormStateInterface,
  }>({
    LoginValue: LoginValueSelector,
    PasswordValue: PasswordValueSelector,
    // LoginFailed: LoginFailedSelector,
    LoginFormState: LoginFormStateSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  changeLoginValue: syncActionCreators.changeLoginValue,
  changePasswordValue: syncActionCreators.changePasswordValue,
  sendUserCredentialToAPI: asyncActionCreators.sendUserCredentialToAPI,
}, dispatch);

export const LoginConnected =
  connect(mapStateToProps, mapDispatchToProps)(Login);