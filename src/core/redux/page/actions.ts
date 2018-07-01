// import { sendRequestToAPI } from '@src/core/libs';

// import { Dispatch } from '@src/core/redux';

export const CHANGE_MENU_LOADED_KEY = 'CHANGE_MENU_LOADED_KEY';
export const CHANGE_ERROR_KEY = 'CHANGE_ERROR_KEY';

export type Actions = {
  CHANGE_MENU_LOADED_KEY: {
    type: typeof CHANGE_MENU_LOADED_KEY,
  },

  CHANGE_ERROR_KEY: {
    type: typeof CHANGE_ERROR_KEY,
  },
};

export const syncActionCreators = {
  changeMenuLoadedKey: (): Actions[typeof CHANGE_MENU_LOADED_KEY] => ({
    type: CHANGE_MENU_LOADED_KEY,
  }),

  changeErrorKey: (): Actions[typeof CHANGE_ERROR_KEY] => ({
    type: CHANGE_ERROR_KEY,
  }),
};

export const asyncActionCreators = {
  getAllMenusFromAPI: () => {
    // return async (dispatch: Dispatch) => {
    //   try {

    //   } catch (error) {

    //   }
    // }
  }
};