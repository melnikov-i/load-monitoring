import { sendRequestToAPI } from '@src/core/libs';
import { Dispatch } from '../';

import { syncActionCreators as formActionCreators } from '../form';

import {
  ILoginRequestPayload,
} from '@src/core/interfaces';

export const CHANGE_LOGIN_VIEW = 'CHANGE_LOGIN_VIEW';
export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';
export const USER_IS_NOT_AUTHORIZED = 'USER_IS_NOT_AUTHORIZED';

export type Actions = {
  CHANGE_LOGIN_VIEW: {
    type: typeof CHANGE_LOGIN_VIEW,
    payload: string,
  },

  USER_IS_AUTHORIZED: {
    type: typeof USER_IS_AUTHORIZED,
  },

  USER_IS_NOT_AUTHORIZED: {
    type: typeof USER_IS_NOT_AUTHORIZED,
  }
};

export const syncActionCreators = {
  /** Меняет идентификатор вида страницы */
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

  /**
   * Меняет значение ключа isAuthorized на false.
   * Происходит при выходе пользователя из системы.
   */
  userIsNotAuthorized: (): Actions[typeof USER_IS_NOT_AUTHORIZED] => ({
    type: USER_IS_NOT_AUTHORIZED,
  }),
};

export const asyncActionCreators = {
  sendUserCredentialToAPI: (payload: ILoginRequestPayload) => {
    return async (dispatch: Dispatch) => {
      try {
        /** подготовка запроса */
        dispatch(syncActionCreators.changeLoginValue('pending'));
        const response: any = await sendRequestToAPI.post('/auth.php', payload);
        console.log('response:', response.data);
        /** ответ с хорошим результатом */
        if (response.data === 'true') {
          /** пользователь авторизован */
          dispatch(syncActionCreators.userIsAuthorized());
          /** очистка полей ввода */
          dispatch(formActionCreators.clearFormsModel());
        } else {
          /** ответ с плохим результатом */
          const _payload = {
            formName: 'login',
            formItems: {
              login: {
                value: payload.login,
                validation: 'notValid',
              },
              password: {
                value: payload.password,
                validation: 'notValid',
              }
            }
          }
          dispatch(formActionCreators.validateFormsModelItem(_payload));
        }
        dispatch(syncActionCreators.changeLoginValue('form'));
      } catch (error) {
        console.error('send user credential error:', error);
      }
    }
  },

  /**
   * Отправляет на сервер информацию о завершении сеанса.
  */
  sendLogoutToApi: () => {
    return async (dispatch: Dispatch) => {
      try {
        const response: any = await sendRequestToAPI.post('/auth.php', { step: 'exit' });
        console.log('response:', response);
      } catch (error) {
        console.log('[ERROR]:', error);
      }
      dispatch(syncActionCreators.userIsNotAuthorized());
    }
  },
};