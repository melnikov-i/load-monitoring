import { combineReducers } from 'redux';

import {
  FORM_INPUT_CHANGE_VALUE,
} from './';

import {
  IFormInputValues
} from '../interfaces';

export type State = {
  readonly values: IFormInputValues['values'],
};

const _values: IFormInputValues['values'] = [['', '', '']];

export const reducer = combineReducers<State>({
  values: (state = _values, action) => {
    switch (action.type) {
      case FORM_INPUT_CHANGE_VALUE:
        const _state = state;
        (_state[action.payload.storeContext[0]])[action.payload.storeContext[1]] =
          action.payload.value;
        return _state;
      default:
        return state;
    }
  }
});