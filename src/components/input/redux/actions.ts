export const CREATE_D_ATRIBUTES = 'CREATE_D_ATRIBUTES';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CLEAR_D_ATRIBUTES = 'CLEAR_D_ATRIBUTES';
export const VALIDATE_D_ATRIBUTES = 'VALIDATE_D_ATRIBUTES';

export type Actions = {
  CREATE_D_ATRIBUTES: {
    type: typeof CREATE_D_ATRIBUTES,
    payload: any,
  },
  CHANGE_INPUT_VALUE: {
    type: typeof CHANGE_INPUT_VALUE,
    payload: any,
  },
  CLEAR_D_ATRIBUTES: {
    type: typeof CLEAR_D_ATRIBUTES,
  },
  VALIDATE_D_ATRIBUTES: {
    type: typeof VALIDATE_D_ATRIBUTES,
    payload: any,
  }
};

export const syncActionCreators = {
  /** передает в хранилище ячейку экземпляра компонента */
  createDAtributes: (payload: any): Actions[typeof CREATE_D_ATRIBUTES] => ({
    type: CREATE_D_ATRIBUTES, payload,
  }),
  changeInputValue: (payload: any): Actions[typeof CHANGE_INPUT_VALUE] => ({
    type: CHANGE_INPUT_VALUE, payload,
  }),
  clearDAtributes: (): Actions[typeof CLEAR_D_ATRIBUTES] => ({
    type: CLEAR_D_ATRIBUTES,
  }),
  validateDAtributes: (payload: any): Actions[typeof VALIDATE_D_ATRIBUTES] => ({
    type: VALIDATE_D_ATRIBUTES, payload,
  })
}