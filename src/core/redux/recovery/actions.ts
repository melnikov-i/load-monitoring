import { sendRequestToAPI } from '@src/core/libs';
import { Dispatch } from '../';

import { syncActionCreators as formActionCreators } from '@src/core/redux/form';

export const CHANGE_RECOVERY_VIEW = 'CHANGE_RECOVERY_VIEW';

export type Actions = {
  CHANGE_RECOVERY_VIEW: {
    type: typeof CHANGE_RECOVERY_VIEW,
    payload: string,
  }
};

export const syncActionCreators = {
  changeRecoveryView: (payload: string): Actions[typeof CHANGE_RECOVERY_VIEW] => ({
    type: CHANGE_RECOVERY_VIEW, payload
  })
};

export const asyncActionCreators = {
  sendRecoveryToAPI: (payload: any) => {
    return async (dispatch: Dispatch) => {
      dispatch(syncActionCreators.changeRecoveryView('pending'));
      dispatch(formActionCreators.clearFormsModel());
      try {
        const response = await sendRequestToAPI.post('/reg.php', payload);
        console.log('recovery', response);
        if (response.data === '') {
          dispatch(syncActionCreators.changeRecoveryView('success'));
        } else {
          dispatch(syncActionCreators.changeRecoveryView('failed'));
        }
      } catch (error) {
        console.error(error);
        dispatch(syncActionCreators.changeRecoveryView('error'));
      }
    }
  }
};