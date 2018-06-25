/**
 * Компонент страницы с формой регистрации
 */
import * as React from 'react';
import * as Recaptcha from 'react-recaptcha';

import {
  LoginLayoutWrapper,
  LoginLayout,
  RegistrationWrapper,
  RegistrationFormHeader,
  RegistrationFormInputWrapper,
  RegistrationFormInput,
  RegistrationFormButton,
  RegistrationAgreementCheckbox,
} from '@src/styled';

import {
  IRegistrationFormItemsCollection,
  IRegistrationFormValidation,
} from '@src/interfaces';

interface RegistrationProps {
  registrationFormItemsCollection: IRegistrationFormItemsCollection,
  registrationFormValidation: IRegistrationFormValidation,
  reCaptcha: string,
  changeRegistrationEmailValue:
  (payload: IRegistrationFormItemsCollection['email']) => any,
  changeRegistrationPasswordValue:
  (payload: IRegistrationFormItemsCollection['password']) => any,
  changeRegistrationConfirmPasswordValue:
  (payload: IRegistrationFormItemsCollection['confirm']) => any,
  updateRecaptchaValue: (payload: string) => any,
  switchRegistrationAgreementValue: () => any,
  updateRegistrationFormValidation:
  (payload: IRegistrationFormValidation) => any,
}

export const Registration: React.SFC<RegistrationProps> = (props) => {
  const {
    registrationFormItemsCollection,
    registrationFormValidation,
    reCaptcha,
    changeRegistrationEmailValue,
    changeRegistrationPasswordValue,
    changeRegistrationConfirmPasswordValue,
    updateRecaptchaValue,
    switchRegistrationAgreementValue,
    updateRegistrationFormValidation,
  } = props;


  /**
   * Обработчики событий формы регистрации.
   */
  const handlerRegistrationEmailValue =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      changeRegistrationEmailValue(e.currentTarget.value);
    };

  const handlerRegistrationPasswordValue =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      changeRegistrationPasswordValue(e.currentTarget.value);
    };

  const handlerRegistrationConfirmPasswordValue =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      changeRegistrationConfirmPasswordValue(e.currentTarget.value);
    };

  const handlerVerifyByReCaptcha = (response: string) => {
    updateRecaptchaValue(response);
  }

  const handlerRegistrationAgreement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    switchRegistrationAgreementValue();
  };

  /**
   * Обработчик кнопки "Регистрация"
   */
  const handlerSendRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const collection = registrationFormItemsCollection;

    const validation: IRegistrationFormValidation = {
      email: /.+@.+\..+/i.test(registrationFormItemsCollection.email)
        ? 'valid' : 'notValid',
      password: (collection.password === collection.confirm)
        ? collection.password !== '' ? 'valid' : 'notValid' : 'notValid',
      confirm: collection.password === collection.confirm
        ? collection.password !== '' ? 'valid' : 'notValid' : 'notValid',
      agreement: collection.agreement ? 'valid' : 'notValid',
      recapture: reCaptcha,
    }
    updateRegistrationFormValidation(validation);

  };

  return (
    <LoginLayoutWrapper>
      <LoginLayout>
        <RegistrationWrapper>
          <RegistrationFormHeader>
            { 'Регистрация'}
          </RegistrationFormHeader>
          <RegistrationFormInputWrapper
            validation = { registrationFormValidation.email }
            hint = { 'Введите правильный адрес электронной почты'}
          >
            <RegistrationFormInput
              onChange={ handlerRegistrationEmailValue }
              type = { 'text'}
              placeholder = { 'E-Mail'}
              value = { registrationFormItemsCollection.email }
              validation = { registrationFormValidation.email }
            />
          </RegistrationFormInputWrapper>
          <RegistrationFormInputWrapper
            validation = { registrationFormValidation.password }
            hint = { 'Это поле не совпадает с полем Повторите пароль'}
          >
            <RegistrationFormInput
              onChange={ handlerRegistrationPasswordValue }
              type = { 'password'}
              placeholder = { 'Пароль'}
              value = { registrationFormItemsCollection.password }
              validation = { registrationFormValidation.password }
            />
          </RegistrationFormInputWrapper>
          <RegistrationFormInputWrapper
            validation = { registrationFormValidation.confirm }
            hint = { 'Это поле не совпадает с полем Пароль'}
          >
            <RegistrationFormInput
              onChange={ handlerRegistrationConfirmPasswordValue }
              type = { 'password'}
              placeholder = { 'Повторитье пароль'}
              value = { registrationFormItemsCollection.confirm }
              validation = { registrationFormValidation.confirm }
            />
          </RegistrationFormInputWrapper>
          <RegistrationAgreementCheckbox
            isSelected = { registrationFormItemsCollection.agreement }
            onClick = { handlerRegistrationAgreement }
            validation = { registrationFormValidation.agreement }
            hint = {'Чтобы продолжить, '
                    + 'необходимо принять пользовательское соглашение'
            }
          >
            {'Я принимаю'}
          </RegistrationAgreementCheckbox>
            <Recaptcha
              sitekey = "6Ld2mlgUAAAAAJW72kNFehX6Jz9I468FVOiiPce7"
              render = "explicit"
              verifyCallback = { handlerVerifyByReCaptcha }
            />
            <RegistrationFormButton
              onClick={ handlerSendRegistration }
            > { 'Регистрация'} </RegistrationFormButton>
          </RegistrationWrapper>
        </LoginLayout>
    </LoginLayoutWrapper>
  );
};
