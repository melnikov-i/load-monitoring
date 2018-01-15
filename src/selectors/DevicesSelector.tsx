import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

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

export const DevicesLoadCollectionSelector =
  createSelector(
    ( state: RootState ) => state.devices.DevicesLoadCollection,
    ( DevicesLoadCollection ) => DevicesLoadCollection,
  );

  

export const TestValueSelector =
  createSelector(
    ( state: RootState ) => state.devices.TestValue,
    ( TestValue ) => TestValue,
  );