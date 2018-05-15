/**
 * Компонент страницы авторизации. Отображает форму
 * авторизации.
*/
import * as React from 'react';
import * as Recaptcha from 'react-recaptcha';

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
  RegistrationFormButton,
  RegistrationAgreementCheckbox,
} from '@src/styled';

import {
  LoginFormInterface,
  LoginFormStateInterface,
  IRegistrationForm,
  IRegistrationFormValidation,
} from '@src/interfaces';

/* Импорт компонента спиннера для отображения процесса загрузки */
import { Spinner } from '@src/components';

interface LoginProps {
  loginValue: LoginFormInterface['login'],
  passwordValue: LoginFormInterface['password'],
  loginFormState: LoginFormStateInterface,
  registrationEmailValue: IRegistrationForm['email'],
  registrationPasswordValue: IRegistrationForm['password'],
  registrationConfirmPasswordValue: IRegistrationForm['password'],
  registrationAgreementValue: boolean,
  registrationFormValidation: IRegistrationFormValidation,
  reCaptcha: string,
  
  changeLoginValue: (payload: LoginFormInterface['login']) => any,
  changePasswordValue: (payload: LoginFormInterface['password']) => any,
  changeConfirmPasswordValue: (payload: LoginFormInterface['password']) => any,
  sendUserCredentialToAPI: ( payload: LoginFormInterface ) => any,
  handleInputEmailEvent: (payload: IRegistrationForm['email']) => any,
  updateRecaptchaValue: ( payload: string ) => any,
  switchAgreementCheckboxValue: () => any,
}

export const Login: React.SFC<LoginProps> = (props) => {
  const {
    loginValue,
    passwordValue,
    loginFormState,
    registrationEmailValue,
    registrationPasswordValue,
    registrationConfirmPasswordValue,
    registrationAgreementValue,
    // registrationFormValidation,
    reCaptcha,
    changeLoginValue,
    changePasswordValue,
    changeConfirmPasswordValue,
    sendUserCredentialToAPI,
    handleInputEmailEvent,
    updateRecaptchaValue,
    switchAgreementCheckboxValue,
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
  const updateConfirmPasswordValue =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      changeConfirmPasswordValue(e.currentTarget.value);
    };

  /* При вводе символа в поле, отправляет этот символ в store */
  const updateEmailValue =
  (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleInputEmailEvent(e.currentTarget.value);
  }

  /* По нажатии на кнопку, отправляет введенные данные на бэкэнд */
  const handlerLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const UserCredential: LoginFormInterface = {
      login: loginValue,
      password: passwordValue,
    };
    sendUserCredentialToAPI(UserCredential);
  };

  const handlerVerify = ( response: string ) => {
    updateRecaptchaValue(response);
  }

  const handlerRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const payload: any = {
      state: 'register',
      email: registrationEmailValue,
      verification: reCaptcha,
    };

    console.log('toServer:', payload);
  };

  const handlerAgreement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    switchAgreementCheckboxValue();
  };

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
                onClick={handlerLogin}
              >{'Вход'}</LoginFormButton>
            </LoginFormLayout>
          </LoginInnerPart>
        </LoginWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );

  const registrationPage = (): JSX.Element => (
    <LoginLayoutWrapper>
      <LoginLayout>
        <RegistrationWrapper>
          <RegistrationFormHeader>
            {'Регистрация'}
          </RegistrationFormHeader>
          <RegistrationFormInput
            onChange={updateEmailValue}
            type={'text'}
            placeholder={'E-Mail'}
            value={registrationEmailValue}
          />
          <RegistrationFormInput
            onChange={updatePasswordValue}
            type={'password'}
            placeholder={'Пароль'}
            value={registrationPasswordValue}
          />
          <RegistrationFormInput
            onChange={updateConfirmPasswordValue}
            type={'password'}
            placeholder={'Повторитье пароль'}
            value={registrationConfirmPasswordValue}
          />
          <RegistrationAgreementCheckbox
            isSelected={registrationAgreementValue}
            onClick={handlerAgreement}
          >
            {'Я принимаю'}
          </RegistrationAgreementCheckbox>
          <Recaptcha
            sitekey="6Ld2mlgUAAAAAJW72kNFehX6Jz9I468FVOiiPce7"
            render="explicit"
            verifyCallback={handlerVerify}
          />
          <RegistrationFormButton
            onClick={handlerRegistration}
          >{'Регистрация'}</RegistrationFormButton>
        </RegistrationWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );

  switch ( loginStateType ) {
    case 'error': return null;
    case 'login': return loginPage();
    case 'registration': return registrationPage();
    case 'agreement': return null;
    default: return null;
  }
};