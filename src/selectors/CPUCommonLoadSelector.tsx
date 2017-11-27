import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const CPUCommonLoadCollection =
( state: RootState ) => (
  state.cpu.CPUCommonLoadCollection
);

const CPUCommonLoadCurrentItem = 
( state: RootState ) => (
  state.cpu.CPUCommonLoadCurrentItem
);

export const CPUCommonLoadCollectionItemSelector = createSelector(
  [ CPUCommonLoadCollection ],
  ( CPUCommonLoadCollection ) => CPUCommonLoadCollection
);

export const CPUCommonLoadCurrentItemSelector = createSelector(
  [ CPUCommonLoadCurrentItem ],
  ( CPUCommonLoadCurrentItem ) => CPUCommonLoadCurrentItem
);