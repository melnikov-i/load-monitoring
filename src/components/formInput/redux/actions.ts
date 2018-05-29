import {
  IFormInputChangeValue,
  IFormInputValues,
} from '@src/components/formInput';

export const FORM_INPUT_CHANGE_VALUE = 'FORM_INPUT_CHANGE_VALUE';
export const FORM_INPUT_CHANGE_VALIDATION_VALUE = 'FORM_INPUT_CHANGE_VALIDATION_VALUE';

export type Actions = {
  FORM_INPUT_CHANGE_VALUE: {
    type: typeof FORM_INPUT_CHANGE_VALUE,
    payload: IFormInputChangeValue,
  },
  FORM_INPUT_CHANGE_VALIDATION_VALUE: {
    type: typeof FORM_INPUT_CHANGE_VALIDATION_VALUE,
    payload: IFormInputValues['values'],
  }
};

export const syncActionCreators = {
  
  changeValue: (payload: IFormInputChangeValue):
    Actions[typeof FORM_INPUT_CHANGE_VALUE] => ({
      type: FORM_INPUT_CHANGE_VALUE, payload,
    }),

  changeValidationValue: (payload: IFormInputValues['values']):
    Actions[typeof FORM_INPUT_CHANGE_VALIDATION_VALUE] => ({
      type: FORM_INPUT_CHANGE_VALIDATION_VALUE, payload,
    })
}