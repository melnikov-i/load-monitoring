import { combineReducers } from 'redux';

import {
  CREATE_D_ATRIBUTES,
  CHANGE_INPUT_VALUE,
  CLEAR_D_ATRIBUTES,
  VALIDATE_D_ATRIBUTES,
} from './';

export type State = {
  readonly dAtributesModel: any,
};

export const reducer = combineReducers<State>({
  dAtributesModel: (state = {}, action) => {
    switch (action.type) {
      case CREATE_D_ATRIBUTES:
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
        case CLEAR_D_ATRIBUTES: return {};
        case VALIDATE_D_ATRIBUTES:
          return action.payload;
      default: return state;
    }
  },
});
