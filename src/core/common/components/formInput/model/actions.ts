export const CHANGE_VALUE = 'CHANGE_VALUE';

export type Actions = {
  CHANGE_VALUE: {
    type: typeof CHANGE_VALUE,
    payload: string,
  }
};

export const syncActionCreators = {
  changeValue: (payload: string):
  Actions[typeof CHANGE_VALUE] => ({
    type: CHANGE_VALUE, payload,
  })
}