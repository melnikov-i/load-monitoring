import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const OverviewItemsWasRequestedFromAPISelector = 
  createSelector(
    ( state: RootState ) => state.overview.OverviewItemsWasRequestedFromAPI,
    ( OverviewItemsWasRequestedFromAPI ) => OverviewItemsWasRequestedFromAPI
  );
export const OverviewItemsCollectionSelector = 
  createSelector(
    ( state: RootState ) => state.overview.OverviewItemsCollection,
    ( OverviewItemsCollection ) => OverviewItemsCollection
  );