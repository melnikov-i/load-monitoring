import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

import { DevicesLoadCurrentItemInterface } from '@src/interfaces';

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

export const DevicesLoadCurrentItemSelector =
  createSelector(
    ( state: RootState, ownProps: DevicesLoadCurrentItemInterface ) => 
      state.devices.DevicesLoadCollection[ownProps.id],
    ( DevicesLoadCollection ) => DevicesLoadCollection,
  );