import { combineReducers } from 'redux';

import {
  LoginFormInterface,
  LoginFormStateInterface,
  IRegistrationForm,
  IRegistrationFormValidation,
} from '@src/interfaces';

import {
  USER_IS_AUTHORIZED,
  USER_WAS_LOGOUT,
  CHANGE_LOGIN_VALUE,
  CHANGE_PASSWORD_VALUE,
  SENDING_USER_CREDENTIAL_IN_PROGRESS,
  CHANGE_R_PASSWORD_VALUE,
  CHANGE_R_CONFIRM_PASSWORD_VALUE,
  CHANGE_R_EMAIL_VALUE,
  UPDATE_RECAPTCHA_VALUE,
  SWITCH_R_AGREEMENT_CHECKBOX_VALUE
} from '@src/redux/login';

export type State = {
  /** ключ проверки авторизации */
  readonly isAuthorized: boolean,
  /** значения полей формы авторизации */
  readonly loginValue: LoginFormInterface['login'],
  readonly passwordValue: LoginFormInterface['password'],
  readonly loginFormState: LoginFormStateInterface,
  /** значение полей формы регистрации */
  readonly registrationEmailValue: IRegistrationForm['email'],
  readonly registrationPasswordValue: IRegistrationForm['password'],
  readonly registrationConfirmPasswordValue: IRegistrationForm['password'],
  readonly registrationAgreementValue: boolean,
  readonly registrationFormValidation: IRegistrationFormValidation,
  readonly reCaptcha: string,
};

const loginFormStateInitialState: LoginFormStateInterface = {
  loginFormStateIndex: 0,
  header: [
    'Введите учетные данные',
    'Проверка учетных данных',
    'Учетные данные некорректны'
  ],
};

const formItemsValidationInit: IRegistrationFormValidation = {
  email: 0,
  password: 0,
  agreement: 0,
  recapture: 0,
}

export const reducer = combineReducers<State>({
  /**
   * Содержит ключ состояния авторизации. На него ориентируются:
   *   - App: в зависимости от значения подключает либо Login либо Main
  */
  isAuthorized: ( state = true, action ) => {
    switch ( action.type ) {
      case USER_IS_AUTHORIZED:
        return true;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },

  /**
   * Содержит значение поля ввода логина.
  */
  loginValue: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_LOGIN_VALUE:
        return action.payload;
      case USER_IS_AUTHORIZED:
        return '';
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },

  /**
   * Содержит значение поля ввода пароля.
  */
  passwordValue: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_PASSWORD_VALUE:
        return action.payload;
      case USER_IS_AUTHORIZED:
        return '';
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },

  /**
   * Содержит состояние формы авторизации
  */
  loginFormState: ( state = loginFormStateInitialState, action ) => {
    switch ( action.type ) {
      case SENDING_USER_CREDENTIAL_IN_PROGRESS:
        if ( action.payload < state.header.length ) {
          return {
            ...state,
            loginFormStateIndex: action.payload
          }          
        } else {
          return state;
        }
      case USER_IS_AUTHORIZED:
        return loginFormStateInitialState;
      case USER_WAS_LOGOUT:
        return loginFormStateInitialState;
      default:
        return state;
    }
  },

  /**
   * Содержит значение поля ввода пароля формы регистрации
   */
  registrationPasswordValue: (state = '', action) => {
    switch (action.type) {
      case CHANGE_R_PASSWORD_VALUE:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },

  /**
   * Содержит значение поля ввода подтверждения пароля формы регистрации.
  */
  registrationConfirmPasswordValue: (state = '', action) => {
    switch (action.type) {
      case CHANGE_R_CONFIRM_PASSWORD_VALUE:
        return action.payload;
      case USER_IS_AUTHORIZED:
        return '';
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },

  /**
   * Содержит значение поля ввода E-Mail в форме авторизации
   */
  registrationEmailValue: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_R_EMAIL_VALUE:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },

  /**
   * Строка с кодом ответа от сервиса Google ReCaptcha
   */
  reCaptcha: ( state = '', action ) => {
    switch ( action.type ) {
      case UPDATE_RECAPTCHA_VALUE:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },

  /**
   * состояние чекбокса
   */
  registrationAgreementValue: (state = false, action) => {
    switch (action.type) {
      case SWITCH_R_AGREEMENT_CHECKBOX_VALUE:
        return !state;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },

  /**
   * Объект валидации формы. При нажатии на кнопку отправки формы,
   * форма подвергнется проверке. После чего в этот объект передадутся
   * данные по всем элементам формы для визуального отображения ошибки.
   */
  registrationFormValidation: (state = formItemsValidationInit, action) => {
    switch (action.type) {
      case USER_WAS_LOGOUT:
        return formItemsValidationInit;
      default:
        return state;
    }
  }

});

/**
 * USER_IS_AUTHORIZED
USER_WAS_LOGOUT
CHANGE_LOGIN_VALUE
CHANGE_PASSWORD_VALUE
SENDING_USER_CREDENTIAL_IN_PROGRESS
CHANGE_R_PASSWORD_VALUE
CHANGE_R_CONFIRM_PASSWORD_VALUE
CHANGE_R_EMAIL_VALUE
UPDATE_RECAPTCHA_VALUE
SWITCH_R_AGREEMENT_CHECKBOX_VALUE
 */