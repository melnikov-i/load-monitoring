import * as React from 'react';

import {
  LoginLayout,
  LoginWrapper,
  LoginInnerPart,
  LoginLogotype,
  LoginHeader,
  LoginFormLayout,
  LoginFormHeader,
  LoginFormInput,
  LoginFormButton
} from '@src/styled';

import {
  LoginFormInterface
} from '@src/interfaces';

interface LoginProps {
  LoginValue: LoginFormInterface['login'],
  changeLoginValue: (payload: LoginFormInterface['login']) => any,
  PasswordValue: LoginFormInterface['password'],
  changePasswordValue: (payload: LoginFormInterface['password']) => any,
  sendUserCredentialToAPI: ( payload: LoginFormInterface[] ) => any,
}

export const Login: React.SFC<LoginProps> = (props) => {
  const {
    LoginValue,
    PasswordValue,
    changeLoginValue,
    changePasswordValue,
    sendUserCredentialToAPI
  } = props;

  const updateLoginValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    changeLoginValue(e.currentTarget.value);
  };

  const updatePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    changePasswordValue(e.currentTarget.value);
  };

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const UserCredential: LoginFormInterface[] = [{
      login: LoginValue,
      password: PasswordValue,
    }];
    console.log('UserCredential', UserCredential);
    sendUserCredentialToAPI(UserCredential);
  }

  return (
    <LoginLayout>
      <LoginWrapper>
        <LoginInnerPart>
          <LoginLogotype>
            <LoginHeader>{'Система мониторинга'}</LoginHeader>
          </LoginLogotype>
        </LoginInnerPart>
        <LoginInnerPart>
          <LoginFormLayout>
            <LoginFormHeader>
              {'Введите учетные данные'}
            </LoginFormHeader>
            <LoginFormInput
              onChange={updateLoginValue}
              type={'text'}
              placeholder={'Имя пользователя'}
              value={LoginValue}
            />
            <LoginFormInput
              onChange={updatePasswordValue}
              type={'password'}
              placeholder={'Пароль'}
              value={PasswordValue}
            />
            <LoginFormButton
              onClick={buttonHandler}
            >{'Вход'}</LoginFormButton>
          </LoginFormLayout>
        </LoginInnerPart>
      </LoginWrapper>
    </LoginLayout>
  );
};