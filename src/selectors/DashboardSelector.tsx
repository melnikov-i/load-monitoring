import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const DashboardCollectionSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DashboardCollection,
    ( DashboardCollection ) => DashboardCollection,
  );

export const DashboardWasRequestedFromAPISelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DashboardWasRequestedFromAPI,
    ( DashboardWasRequestedFromAPI ) => DashboardWasRequestedFromAPI,
  );

export const MainHeaderButtonWasClickedSelector =
  createSelector(
    ( state: RootState ) => state.mainHead.MainHeaderButtonWasClicked,
    ( MainHeaderButtonWasClicked ) => MainHeaderButtonWasClicked,
  );

export const SelectedCheckboxSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.SelectedCheckbox,
    ( SelectedCheckbox ) => SelectedCheckbox,
  );