// import { Dispatch } from '@src/core/redux';

export const CHANGE_OVERVIEW_LOADED_KEY = 'CHANGE_OVERVIEW_LOADED_KEY';
export const CHANGE_OVERVIEW_ERROR_KEY = 'CHANGE_OVERVIEW_ERROR_KEY';

export type Actions = {
  CHANGE_OVERVIEW_LOADED_KEY: {
    type: typeof CHANGE_OVERVIEW_LOADED_KEY,
    payload: boolean,
  },

  CHANGE_OVERVIEW_ERROR_KEY: {
    type: typeof CHANGE_OVERVIEW_ERROR_KEY,
    payload: boolean,
  },
};

export const syncActionCreators = {
  /** Управляет ключем, по которому определяется наличие загруженной коллекции */
  changeOverviewLoadedKey: (payload: boolean): Actions[typeof CHANGE_OVERVIEW_LOADED_KEY] => ({
    type: CHANGE_OVERVIEW_LOADED_KEY, payload,
  }),

  /** управляет ключем, управляющим отображением в случае получения ошибки */
  changeOverviewErrorKey: (payload: boolean): Actions[typeof CHANGE_OVERVIEW_ERROR_KEY] => ({
    type: CHANGE_OVERVIEW_ERROR_KEY, payload,
  }),
}

export const asyncActionCreators = {
  getOverviewCollection: () => {
    return async (/* dispatch: Dispatch */) => {

    }
  }
}