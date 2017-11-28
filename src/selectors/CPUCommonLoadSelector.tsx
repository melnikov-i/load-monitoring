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

const data0 = 
( state: RootState ) => (
  state.common.data0
);

const data1 = 
( state: RootState ) => (
  state.common.data1
);

const index =
( state: RootState ) => (
  state.common.index
);

export const currentDataCollectionItemSelector = createSelector(
  [ data0, data1, currentDataCollection, index ],
  ( data0, data1, currentDataCollection, index ) => {
    if ( currentDataCollection === "data0" ) {
      return data0[index];
    } else {
      return data1[index];
    }
  }
);