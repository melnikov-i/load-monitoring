import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

import { DevicesTableInterface } from '@src/interfaces';

export interface DevicesLoadCurrentItemInterface {
  id: DevicesTableInterface['to']
}

export const DevicesTableItemsCollectionSelector =
  createSelector(
    ( state: RootState ) => state.devices.DevicesTableItemsCollection,
    ( DevicesTableItemsCollection ) => DevicesTableItemsCollection,
  );

export const DevicesItemsWasRequestedFromAPISelector =
  createSelector(
    ( state: RootState ) => state.devices.DevicesItemsWasRequestedFromAPI,
    ( DevicesItemsWasRequestedFromAPI ) => DevicesItemsWasRequestedFromAPI,
  );

// export const DevicesLoadItemsWasRequestedFromAPISelector =
//   createSelector(
//     ( state: RootState ) => 
//       state.devices.DevicesLoadItemsWasRequestedFromAPI,
//     ( DevicesLoadItemsWasRequestedFromAPI ) => 
//       DevicesLoadItemsWasRequestedFromAPI,
//   );

export const DevicesLoadCurrentItemSelector =
  createSelector(
    ( state: RootState, ownProps: DevicesLoadCurrentItemInterface ) => 
      state.devices.DevicesLoadCollection[ownProps.id],
    ( DevicesLoadCollection ) => DevicesLoadCollection,
  );

export const DevicesLoadCollectionSelector =
  createSelector(
    ( state: RootState ) => state.devices.DevicesLoadCollection,
    ( DevicesLoadCollection ) => DevicesLoadCollection,
  );