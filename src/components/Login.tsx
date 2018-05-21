/**
 * Компонент страницы авторизации. Отображает форму
 * авторизации.
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
  LoginFormStateInterface,
  
} from '@src/interfaces';

/* Импорт компонента спиннера для отображения процесса загрузки */
import { Spinner } from '@src/components';

interface LoginProps {
  loginValue: LoginFormInterface['login'],
  passwordValue: LoginFormInterface['password'],
  loginFormState: LoginFormStateInterface,  
  changeLoginValue: (payload: LoginFormInterface['login']) => any,
  changePasswordValue: (payload: LoginFormInterface['password']) => any,
  sendUserCredentialToAPI: ( payload: LoginFormInterface ) => any,
  
}

export const Login: React.SFC<LoginProps> = (props) => {
  const {
    loginValue,
    passwordValue,
    loginFormState,
    changeLoginValue,
    changePasswordValue,
    sendUserCredentialToAPI,
  } = props;

  /**
   * Обработчики событий формы авторизации
   */
  const updateLoginValue = 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeLoginValue(e.currentTarget.value);
  };

  const updatePasswordValue =
  (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changePasswordValue(e.currentTarget.value);
  };
  
  const handlerSendCredential = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const UserCredential: LoginFormInterface = {
      login: loginValue,
      password: passwordValue,
    };
    sendUserCredentialToAPI(UserCredential);
  };

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
                loginFormStateIndex={loginFormState.loginFormStateIndex}
              >
                {/* Заголовок формы. Зависит от результата проверки */}
                {loginFormState.header[
                  loginFormState.loginFormStateIndex
                ]}
              </LoginFormHeader>
              {( loginFormState.loginFormStateIndex === 1 ) ? (
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
                      loginFormState.loginFormStateIndex
                    }
                    onChange={updateLoginValue}
                    type={'text'}
                    placeholder={'Имя пользователя'}
                    value={loginValue}
                  />
                  <LoginFormInput
                    loginFormStateIndex={
                      loginFormState.loginFormStateIndex
                    }
                    onChange={updatePasswordValue}
                    type={'password'}
                    placeholder={'Пароль'}
                    value={passwordValue}
                  />
                </div>
              )}
              <LoginFormButton
                loginFormStateIndex={
                  loginFormState.loginFormStateIndex
                }
                onClick={handlerSendCredential}
              >{'Вход'}</LoginFormButton>
            </LoginFormLayout>
          </LoginInnerPart>
        </LoginWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );
};