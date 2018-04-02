/**
 * Компонент страницы авторизации. Отображает форму авторизации.
 * 
 */

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
  LoginFormButton,
  LoginFormSpinner,  
  LoginLayoutWrapper,
} from '@src/styled';

import {
  LoginFormInterface,
  LoginFormStateInterface
} from '@src/interfaces';


/* Импорт компонента спиннера для отображения процесса загрузки */

import { Spinner } from '@src/components';


interface LoginProps {
  LoginValue: LoginFormInterface['login'],
  changeLoginValue: (payload: LoginFormInterface['login']) => any,
  PasswordValue: LoginFormInterface['password'],
  changePasswordValue: 
  (payload: LoginFormInterface['password']) => any,
  LoginFormState: LoginFormStateInterface,
  sendUserCredentialToAPI: ( payload: LoginFormInterface ) => any,
}


export const Login: React.SFC<LoginProps> = (props) => {
  const {
    LoginValue,
    PasswordValue,
    changeLoginValue,
    changePasswordValue,
    LoginFormState,
    sendUserCredentialToAPI,
  } = props;

  
  /* При вводе символа в поле, отправляет этот символ в store */

  const updateLoginValue = 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeLoginValue(e.currentTarget.value);
  };


  /* При вводе символа в поле, отправляет этот символ в store */

  const updatePasswordValue = 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changePasswordValue(e.currentTarget.value);
  };


  /* По нажатии на кнопку, отправляет введенные данные на бэкэнд */

  const buttonHandler = 
  (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const UserCredential: LoginFormInterface = {
      login: LoginValue,
      password: PasswordValue,
    };
    sendUserCredentialToAPI(UserCredential);
  }
  

  return (
    <LoginLayoutWrapper>
      <LoginLayout>
        <LoginWrapper>
          <LoginInnerPart>
            <LoginLogotype>
              <LoginHeader>{'Система мониторинга'}</LoginHeader>
            </LoginLogotype>
          </LoginInnerPart>
          <LoginInnerPart>
            <LoginFormLayout>
              <LoginFormHeader
                loginFormStateIndex={
                  LoginFormState.loginFormStateIndex
                }
              >
                {/* Заголовок формы. Зависит от результата проверки */}
                {LoginFormState.header[
                  LoginFormState.loginFormStateIndex
                ]}
              </LoginFormHeader>
              {( LoginFormState.loginFormStateIndex === 1 ) ? (
                <LoginFormSpinner>
                  <Spinner
                    width={3}
                    color={'#2f4050'}
                    bgColor={'#fff'}
                  />
                </LoginFormSpinner>
              ) : (
                <div>
                  <LoginFormInput
                    loginFormStateIndex={
                      LoginFormState.loginFormStateIndex
                    }
                    onChange={updateLoginValue}
                    type={'text'}
                    placeholder={'Имя пользователя'}
                    value={LoginValue}
                  />
                  <LoginFormInput
                    loginFormStateIndex={
                      LoginFormState.loginFormStateIndex
                    }
                    onChange={updatePasswordValue}
                    type={'password'}
                    placeholder={'Пароль'}
                    value={PasswordValue}
                  />
                </div>
              )}
              <LoginFormButton
                loginFormStateIndex={
                  LoginFormState.loginFormStateIndex
                }
                onClick={buttonHandler}
              >{'Вход'}</LoginFormButton>
            </LoginFormLayout>
          </LoginInnerPart>
        </LoginWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );
};