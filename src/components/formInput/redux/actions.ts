import {
  IFormInputDynamicItems,
} from '../interfaces';

export const FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL = 'FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL';
export const FORM_INPUT_CHANGE_VALIDATION = 'FORM_INPUT_CHANGE_VALIDATION';

export type Actions = {
  FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL: {
    type: typeof FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL,
    payload: IFormInputDynamicItems,
  },

  FORM_INPUT_CHANGE_VALIDATION: {
    type: typeof FORM_INPUT_CHANGE_VALIDATION,
    payload: any,
  }
};

export const syncActionCreators = {
  /** Помещает в store введенную пользователем в поле информацию. */
  changeDynamicItemsModel: (payload: IFormInputDynamicItems):
    Actions[typeof FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL] => ({
      type: FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL, payload,
    }),

  formInputsChangeValidation: (payload: any):
    Actions[typeof FORM_INPUT_CHANGE_VALIDATION] => ({
        type: FORM_INPUT_CHANGE_VALIDATION, payload,
    }),
}