import {
  IFormInputChangeValue,
} from '@src/components/formInput';

import {
  IFormInputValues,
} from '@src/core/interfaces'

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

  formInputChangeValidationValue: (payload: IFormInputValues['values']):
    Actions[typeof FORM_INPUT_CHANGE_VALIDATION_VALUE] => ({
      type: FORM_INPUT_CHANGE_VALIDATION_VALUE, payload,
    })
}