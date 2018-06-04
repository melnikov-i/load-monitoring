import {
  IFormInputChangeValue,
} from '@src/components/formInput';

export const FORM_INPUT_CREATE_CONTEXT = 'FORM_INPUT_CREATE_CONTEXT';
export const FORM_INPUT_CHANGE_VALUE = 'FORM_INPUT_CHANGE_VALUE';

export type Actions = {
  FORM_INPUT_CREATE_CONTEXT: {
    type: typeof FORM_INPUT_CREATE_CONTEXT,
    payload: any,
  },
  FORM_INPUT_CHANGE_VALUE: {
    type: typeof FORM_INPUT_CHANGE_VALUE,
    payload: IFormInputChangeValue,
  },
};

export const syncActionCreators = {
  /** Создает котнекст */
  createContext: (payload: any[]):
    Actions[typeof FORM_INPUT_CREATE_CONTEXT] => ({
      type: FORM_INPUT_CREATE_CONTEXT, payload,
    }),
  /** Помещает в store введенную пользователем в поле информацию. */
  changeValue: (payload: IFormInputChangeValue):
    Actions[typeof FORM_INPUT_CHANGE_VALUE] => ({
      type: FORM_INPUT_CHANGE_VALUE, payload,
    }),
}