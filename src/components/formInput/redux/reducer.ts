import { combineReducers } from 'redux';

import {
  FORM_INPUT_CHANGE_VALUE,
  FORM_INPUT_CHANGE_VALIDATION_VALUE,
} from './';

import {
  IFormInputValues
} from '../interfaces';

export type State = {
  readonly values: IFormInputValues['values'],
  readonly validation: IFormInputValues['values'],
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
const _values: IFormInputValues['values'] = [['0', '1', '2']];

/**
 * аналогично значениям всех полей, этот массив определяет значения статуса валидации.
 * В зависимости от значения, заданного в этом массиве, каждое поле ввода принимает
 * одно из трех состояний, реализованных через стили:
 * '' - поле не валидировалось.
 * 'notValid' - поле не прошло валидацию
 * 'valid' - поле прошло валидацию успешно.
 */
const _validation: IFormInputValues['values'] = [['', '', '']];

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
  
  /** содержит значения результата валидации всех полей ввода */
  validation: (state = _validation, action) => {
    switch (action.type) {
      case FORM_INPUT_CHANGE_VALIDATION_VALUE:
        return action.payload;
      default: return state;
    }
  },
});