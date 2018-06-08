import { combineReducers } from 'redux';

import {
  SWITCH_AGREEMENT_VALUE,
  SWITCH_FOCUSED_VALUE,
  UPDATE_RECAPTCHA_VALUE,
  CHANGE_REGISTRATION_VIEW,
  CHANGE_VALIDATION_VALUE_IN_COMPONENTS,
  CLEAR_FORM_DATA,
  CHANGE_RECAPTCHA_VALIDATION,
} from './';

// import { IFormInputValues } from '@src/core/interfaces';
import { ICheckboxDynamic, IReCaptchaDynamic } from '@src/components/registration/interfaces';

export type State = {
  readonly checkboxDynamic: ICheckboxDynamic,
  readonly reCaptchaDynamic: IReCaptchaDynamic,
  readonly registrationView: string,
  // readonly isSelected: boolean,
  // readonly isFocused: boolean,
  // readonly validation: IFormInputValues['values'],
  // readonly reCaptcha: string,
};

const _checkboxDynamic: ICheckboxDynamic = {
  value: false,
  isFocused: false,
  validation: '',
}

const _reCaptchaDynamic: IReCaptchaDynamic = {
  value: '',
  validation: '',
}

export const reducer = combineReducers<State>({
  /** Динамические данные чекбокса */
  checkboxDynamic: (state = _checkboxDynamic, action) => {
    switch (action.type) {
      case SWITCH_AGREEMENT_VALUE:
        return {
          ...state,
          value: !state.value,
        };
      case SWITCH_FOCUSED_VALUE:
        return {
          ...state,
          isFocused: !state.isFocused,
        }
      case CHANGE_VALIDATION_VALUE_IN_COMPONENTS:
        return {
          ...state,
          validation: action.payload,
        }
      default: return state;
    }
  },

  /** Содержит состояние нажатия чекбокса принятия пользовательского соглашения */
  // isSelected: (state = false, action) => {
  //   switch (action.type) {
  //     case SWITCH_AGREEMENT_VALUE:
  //       return !state;
  //     case CLEAR_FORM_DATA:
  //       return false;
  //     default:
  //       return state;
  //   }
  // },

  /** Содержит значение чекбокса при фокусе оригинального скрытого чекбокса */
  // isFocused: (state = false, action) => {
  //   switch (action.type) {
  //     case SWITCH_FOCUSED_VALUE:
  //       return !state;
  //     case CLEAR_FORM_DATA:
  //       return false;
  //     default: return state;
  //   }
  // },

  /** содержит значения результата валидации всех полей ввода */
  // validation: (state = _validation, action) => {
  //   switch (action.type) {
  //     case CHANGE_VALIDATION_VALUE_IN_COMPONENTS:
  //       return action.payload;
  //     case CLEAR_FORM_DATA:
  //       return _validation;
  //     default: return state;
  //   }
  // },

  reCaptchaDynamic: (state = _reCaptchaDynamic, action) => {
    switch(action.type) {
      case UPDATE_RECAPTCHA_VALUE:
        return {
          ...state,
          value: action.payload,
        };
      case CHANGE_RECAPTCHA_VALIDATION:
        return action.payload;
      default: return state;
    }
  },

  /** Строка с кодом ответа от сервиса Google ReCaptcha */
  // reCaptcha: (state = '', action) => {
  //   switch (action.type) {
  //     case UPDATE_RECAPTCHA_VALUE:
  //       return action.payload;
  //     case CLEAR_FORM_DATA:
  //       return '';
  //     default:
  //       return state;
  //   }
  // },

  /** Определет показываемый пользователю шаблон */
  registrationView: (state = 'form', action) => {
    switch (action.type) {
      case CHANGE_REGISTRATION_VIEW: return action.payload;
      case CLEAR_FORM_DATA:
        return 'form';
      default: return state;
    }
  },
});