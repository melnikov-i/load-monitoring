import { combineReducers } from 'redux';

import {
  FORM_INPUT_CHANGE_VALUE,
} from './';

import { IFormInputValues } from '@src/core/interfaces';

export type State = {
  readonly values: IFormInputValues['values'],
};

/**
 * массив со значениями полей всех форм, где используется этот компонент.
 * Нужное значение внутри компонента, использующего этот определяется согласно
 * двум индексам массивов. Индекс внешнего массива определяет компонент, в котором
 * используется это поле ввода. Индекс внутреннего массива определяет конкретный
 * эксземпляр поля ввода.
 * 0 - индекс формы регистрации
 * 1 - индекс формы авторизации
 */
const _values: IFormInputValues['values'] = [['', '', '']];

export const reducer = combineReducers<State>({
  /** содержит значения всех полей ввода */
  values: (state = _values, action) => {
    switch (action.type) {
      case FORM_INPUT_CHANGE_VALUE:
        const _state = {...state};
        (_state[action.payload.storeContext[0]])[action.payload.storeContext[1]] =
          action.payload.value;
        return _state;
      default:
        return state;
    }
  },
});