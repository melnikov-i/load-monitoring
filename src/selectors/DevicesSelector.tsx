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

export const DevicesActionButtonClickedIdSelector =
  createSelector(
    ( state: RootState ) => state.devices.DevicesActionButtonClickedId,
    ( DevicesActionButtonClickedId ) => DevicesActionButtonClickedId,
  );