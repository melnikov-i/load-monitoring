import { sendRequestToAPI } from '@src/libs';
import { Dispatch } from '../';

import { ILoginRequestPayload } from '@src/core/interfaces';

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
   * Меняет идентификатор вида страницы
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
};

export const asyncActionCreators = {
  sendUserCredentialToAPI: (payload: ILoginRequestPayload) => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(syncActionCreators.changeLoginValue('pending'));
        const response: any = await sendRequestToAPI.post('/auth.php', payload);
        if (response.data === 'true') {
          dispatch(syncActionCreators.userIsAuthorized());
        }
        dispatch(syncActionCreators.changeLoginValue(''));
      } catch (error) {
        console.error('send user credential error:', error);
      }
    }
  }
};