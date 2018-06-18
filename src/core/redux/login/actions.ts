// import { sendRequestToAPI } from '@src/libs';
// import { Dispatch } from '@src/core';

import { } from '@src/core/interfaces';

// import {
//   syncActionCreators as inputActionCreators
// } from '@src/components/input';

export const CHANGE_LOGIN_VIEW = 'CHANGE_LOGIN_VIEW';
export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';

export type Actions = {
  CHANGE_LOGIN_VIEW: {
    type: typeof CHANGE_LOGIN_VIEW,
    payload: string,
  },

  USER_IS_AUTHORIZED: {
    type: typeof USER_IS_AUTHORIZED,
  },
};

export const syncActionCreators = {
  /**
   * По мере ввода текста с клавиатуры в поле ввода логина, меняет
   * значение этого поля.
   */
  changeLoginValue: (payload: string):
    Actions[typeof CHANGE_LOGIN_VIEW] => ({
      type: CHANGE_LOGIN_VIEW, payload,
    }),

  /**
   * Меняет значение ключа isAuthorized на true.
   * Происходит при успешной авторизации пользователя.
   */
  userIsAuthorized: (): Actions[typeof USER_IS_AUTHORIZED] => ({
    type: USER_IS_AUTHORIZED,
  }),
}