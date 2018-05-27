import { combineReducers } from 'redux';

import {
  SWITCH_AGREEMENT_VALUE,
  UPDATE_RECAPTCHA_VALUE
} from './';

export type State = {
  readonly agreement: boolean,
  readonly reCaptcha: string,
};

export const reducer = combineReducers<State>({
  agreement: (state = false, action) => {
    switch (action.type) {
      case SWITCH_AGREEMENT_VALUE:
        return !state;
      default:
        return state;
    }
  },

  /**
   * Строка с кодом ответа от сервиса Google ReCaptcha
   */
  reCaptcha: (state = '', action) => {
    switch (action.type) {
      case UPDATE_RECAPTCHA_VALUE:
        return action.payload;
      default:
        return state;
    }
  },
});