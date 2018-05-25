import { IFormInputChangeValue } from '@src/components/formInput';

export const FORM_INPUT_CHANGE_VALUE = 'FORM_INPUT_CHANGE_VALUE';

export type Actions = {
  FORM_INPUT_CHANGE_VALUE: {
    type: typeof FORM_INPUT_CHANGE_VALUE,
    payload: IFormInputChangeValue,
  }
};

export const syncActionCreators = {
  changeValue: (payload: IFormInputChangeValue):
  Actions[typeof FORM_INPUT_CHANGE_VALUE] => ({
    type: FORM_INPUT_CHANGE_VALUE, payload,
  })
}