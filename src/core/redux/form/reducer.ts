/**
 * ### FORM ###
 */
import { combineReducers } from 'redux';

import {
  CREATE_FORMS_MODEL_ITEM,
  CHANGE_INPUT_VALUE,
  CLEAR_FORMS_MODEL,
  VALIDATE_FORMS_MODEL_ITEM,
} from './';

export type State = {
  readonly formsModel: any,
};

export const reducer = combineReducers<State>({
  formsModel: (state = {}, action) => {
    switch (action.type) {
      case CREATE_FORMS_MODEL_ITEM:
        let _state = {};
        for (let parent in action.payload) {
          _state = {
            ...state,
            [parent]: Object.assign(
              {}, state[parent], action.payload[parent])
            };
        }
        return _state;
      case CHANGE_INPUT_VALUE:
        let _change;
        for (let parent in action.payload) {
          for (let field in action.payload[parent]) {
            _change = {
              ...state,
              [parent]: {
                ...state[parent],
                [field]: {
                  ...state[parent][field],
                  value: action.payload[parent][field].value,
                }
              }
            };
          }
        }
        return _change;      
        case CLEAR_FORMS_MODEL: return {};
        case VALIDATE_FORMS_MODEL_ITEM:
          return {
            ...state,
            [action.payload.formName]: action.payload.formItems,
          };
      default: return state;
    }
  },
});
