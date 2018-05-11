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
  RegistrationWrapper,
  RegistrationFormHeader,
  RegistrationFormInput,
} from '@src/styled';

import {
  LoginFormInterface,
  LoginFormStateInterface,
  IRegistrationForm
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
  handleInputEmailEvent: (payload: IRegistrationForm['email']) => any,
  EMailValue: IRegistrationForm['email'],
  registrationFormStateType: string,
}

export const Login: React.SFC<LoginProps> = (props) => {
  const {
    LoginValue,
    PasswordValue,
    changeLoginValue,
    changePasswordValue,
    LoginFormState,
    sendUserCredentialToAPI,
    handleInputEmailEvent,
    EMailValue,
    registrationFormStateType
  } = props;

  const loginStateType: string = 'registration';
  
  /**
   * Обработчики событий
   */
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

  /* При вводе символа в поле, отправляет этот символ в store */
  const updateEmailValue =
  (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('updateEmailValue', e.currentTarget.value);
    handleInputEmailEvent(e.currentTarget.value);
  }

  /* По нажатии на кнопку, отправляет введенные данные на бэкэнд */
  const handlerLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const UserCredential: LoginFormInterface = {
      login: LoginValue,
      password: PasswordValue,
    };
    sendUserCredentialToAPI(UserCredential);
  };

  const handlerRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  const loginPage = (): JSX.Element => (
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
                loginFormStateIndex={LoginFormState.loginFormStateIndex}
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
                onClick={handlerLogin}
              >{'Вход'}</LoginFormButton>
            </LoginFormLayout>
          </LoginInnerPart>
        </LoginWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );

  console.log('EMailValue:', EMailValue);

  const registrationPage = (): JSX.Element => (
    <LoginLayoutWrapper>
      <LoginLayout>
        <RegistrationWrapper>
          <RegistrationFormHeader>
            {'Для регистрации заполните форму:'}
          </RegistrationFormHeader>
          <RegistrationFormInput
            registrationFormStateType={registrationFormStateType}
            onChange={updateEmailValue}
            type={'text'}
            placeholder={'E-Mail'}
            value={EMailValue}
          />
          <div
            className="g-recaptcha"
            style={{
              marginBottom: '20px',
            }}
            data-sitekey="6Ld2mlgUAAAAAJW72kNFehX6Jz9I468FVOiiPce7"></div>
          <LoginFormButton
            loginFormStateIndex={
              LoginFormState.loginFormStateIndex
            }
            onClick={handlerRegistration}
          >{'Регистрация'}</LoginFormButton>
        </RegistrationWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );

  switch ( loginStateType ) {
    case 'error': return null;
    case 'login': return loginPage();
    case 'registration': return registrationPage();
    default: return null;
  }
};