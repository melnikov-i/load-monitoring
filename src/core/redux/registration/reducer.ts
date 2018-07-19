import { combineReducers } from 'redux';

import {
  SWITCH_AGREEMENT_VALUE,
  SWITCH_FOCUSED_VALUE,
  UPDATE_RECAPTCHA_VALUE,
  CHANGE_REGISTRATION_VIEW,
  CHANGE_CHECKBOX_VALIDATION,
  CHANGE_RECAPTCHA_VALIDATION,
} from './';

import { ICheckboxDynamic, IReCaptchaDynamic } from '../../interfaces';

export type State = {
  readonly checkboxDynamic: ICheckboxDynamic,
  readonly reCaptchaDynamic: IReCaptchaDynamic,
  readonly registrationView: string,
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
      /** значение чекбокса */
      case SWITCH_AGREEMENT_VALUE:
        return {
          ...state,
          value: !state.value,
        };
      /** признак чекбокса в фокусе */
      case SWITCH_FOCUSED_VALUE:
        return {
          ...state,
          isFocused: !state.isFocused,
        }
      /** значение валидации чекбокса */
      case CHANGE_CHECKBOX_VALIDATION:
        return action.payload;
      // case CLEAR_FORM_DATA:
      //   return _checkboxDynamic;
      default: return state;
    }
  },

  reCaptchaDynamic: (state = _reCaptchaDynamic, action) => {
    switch(action.type) {
      case UPDATE_RECAPTCHA_VALUE:
        return {
          ...state,
          value: action.payload,
        };
      case CHANGE_RECAPTCHA_VALIDATION:
        return action.payload;
      // case CLEAR_FORM_DATA:
      //   return _reCaptchaDynamic;
      default: return state;
    }
  },

  /** Определет показываемый пользователю шаблон */
  registrationView: (state = 'form', action) => {
    switch (action.type) {
      case CHANGE_REGISTRATION_VIEW: return action.payload;
      // case CLEAR_FORM_DATA:
      //   return 'form';
      default: return state;
    }
  },
});