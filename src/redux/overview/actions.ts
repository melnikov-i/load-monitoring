import sendRequestToAPI from '@src/ajax';

import {

} from '@src/interfaces';

import { Dispatch } from '@src/redux';

export const asyncActionCreators = {
  makeOverviewPageItemsRequestFromAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        sycnActionCreators.overviewPageItemsWasRequestedFromAPI()
      );
      sendRequestToAPI.post('/overview.php').then(
        //
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  }
};