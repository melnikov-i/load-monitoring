import sendRequestToAPI from '@src/ajax';

import {
  OverviewInterface,
  OverviewEventsTableInterface,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

export const OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API =
  'OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API';
export const PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION =
  'PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION';

export type Actions = {
  OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API: {
    type: typeof OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API,
  },
  PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION: {
    type: typeof PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION,
    payload: OverviewInterface,
  }
}

export const syncActionCreators = {
  overviewItemsWasRequestedFromAPI: ():
  Actions[typeof OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API] => ({
    type: OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API,
  }),
  putOverviewItemsFromAPIToCollection:
  ( payload: OverviewInterface ):
  Actions[typeof PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION] => ({
    type: PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION, payload
  })
};

export const asyncActionCreators = {
  makeOverviewItemsRequestFromAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.overviewItemsWasRequestedFromAPI()
      );
      sendRequestToAPI.get('/overview.php').then(
        ( response ) => {
          const items: OverviewInterface = {
            counts: {
              normal: String(response.data.counts.normal),
              warning: String(response.data.counts.warning),
              offline: String(response.data.counts.offline),
            },
            events_table: response.data.events_table,
          }
          dispatch(
            syncActionCreators
              .putOverviewItemsFromAPIToCollection(items)
          )
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  },
  remakeOverviewItemsRequestFromAPI: () => {
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {
        dispatch(
          asyncActionCreators.makeOverviewItemsRequestFromAPI()
        );
      }, 60000);
    }
  },
  makeOverviewDeleteItemsRequestFromAPI:
  ( payload: OverviewEventsTableInterface['id'] ) => {
    return ( dispatch: Dispatch ) => {
      sendRequestToAPI.post('/overview.php', {event: payload}).then(
        ( response ) => {
          console.log(response.data);
          dispatch(
            asyncActionCreators.makeOverviewItemsRequestFromAPI()
          );
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  }
};