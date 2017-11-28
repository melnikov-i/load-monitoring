import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const currentDataCollection =
( state: RootState ) => (
  state.common.currentDataCollection
);

export const currentDataCollectionSelector = createSelector(
  [ currentDataCollection ],
  ( currentDataCollection ) => currentDataCollection
);

const dataAddInLastField = 
( state: RootState ) => (
  state.common.dataAddInLastField
);

export const dataAddInLastFieldSelector = createSelector(
  [ dataAddInLastField ],
  ( dataAddInLastField ) => dataAddInLastField
);

const data1 = 
( state: RootState ) => (
  state.common.data1
);

export const data1Selector = createSelector(
  [ data1 ],
  ( data1 ) => data1
);

const data0 = 
( state: RootState ) => (
  state.common.data0
);

export const data0Selector = createSelector(
  [ data0 ],
  ( data0 ) => data0
);