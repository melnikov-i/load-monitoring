import { combineReducers } from 'redux';

import {
  SWITCH_AGREEMENT_VALUE,
  SWITCH_FOCUSED_VALUE,
  UPDATE_RECAPTCHA_VALUE,
  CHANGE_REGISTRATION_VIEW,
  CHANGE_VALIDATION_VALUE,
} from './';

import { IFormInputValues } from '@src/core/interfaces';

export type State = {
  readonly isSelected: boolean,
  readonly isFocused: boolean,
  readonly reCaptcha: string,
  readonly registrationView: string,
  readonly validation: IFormInputValues['values'],
};

/**
 * аналогично значениям всех полей, этот массив определяет значения статуса валидации.
 * В зависимости от значения, заданного в этом массиве, каждое поле ввода принимает
 * одно из трех состояний, реализованных через стили:
 * '' - поле не валидировалось.
 * 'notValid' - поле не прошло валидацию
 * 'valid' - поле прошло валидацию успешно.
 */
const _validation: IFormInputValues['values'] = [['', '', '', '', '']];

export const reducer = combineReducers<State>({
  /** Содержит состояние нажатия чекбокса принятия пользовательского соглашения */
  isSelected: (state = false, action) => {
    switch (action.type) {
      case SWITCH_AGREEMENT_VALUE:
        return !state;
      default:
        return state;
    }
  },

  /** Содержит значение чекбокса при фокусе оригинального скрытого чекбокса */
  isFocused: (state = false, action) => {
    switch (action.type) {
      case SWITCH_FOCUSED_VALUE:
        return !state;
      default: return state;
    }
  },

  /** содержит значения результата валидации всех полей ввода */
  validation: (state = _validation, action) => {
    switch (action.type) {
      case CHANGE_VALIDATION_VALUE:
        return action.payload;
      default: return state;
    }
  },

  /** Строка с кодом ответа от сервиса Google ReCaptcha */
  reCaptcha: (state = '', action) => {
    switch (action.type) {
      case UPDATE_RECAPTCHA_VALUE:
        return action.payload;
      default:
        return state;
    }
  },

  /** Определет показываемый пользователю шаблон */
  registrationView: (state = 'form', action) => {
    switch (action.type) {
      case CHANGE_REGISTRATION_VIEW: return action.payload;
      default: return state;
    }
  },
});