/**
 * ### FORM ###
 */
import { combineReducers } from 'redux';

import {
  CREATE_FORMS_MODEL_ITEM,
  CHANGE_INPUT_VALUE,
  CHANGE_CHECKBOX_VALUE,
  CHANGE_CHECKBOX_FOCUSED,
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
      case CHANGE_CHECKBOX_VALUE:
        let _checkboxValue;
        for (let parent in action.payload) {
          for (let field in action.payload[parent]) {
            _checkboxValue = {
              ...state,
              [parent]: {
                ...state[parent],
                [field]: {
                  ...state[parent][field],
                  value: !state[parent][field].value,
                }
              }
            };
          }
        }
        return _checkboxValue;
      case CHANGE_CHECKBOX_FOCUSED:
        let _checkboxFocused;
        for (let parent in action.payload) {
          for (let field in action.payload[parent]) {
            _checkboxFocused = {
              ...state,
              [parent]: {
                ...state[parent],
                [field]: {
                  ...state[parent][field],
                  isFocused: !state[parent][field].isFocused,
                }
              }
            };
          }
        }
        return _checkboxFocused;
      case CLEAR_FORMS_MODEL: 
        console.log('CLEAR_FORMS_MODEL');
        return {};
      case VALIDATE_FORMS_MODEL_ITEM:
        return {
          ...state,
          [action.payload.formName]: action.payload.formItems,
        };
      default: return state;
    }
  },
});
