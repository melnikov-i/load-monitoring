import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const DashboardCollectionSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DashboardCollection,
    ( DashboardCollection ) => DashboardCollection,
  );

export const DraggableWidgetsCollectionSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DraggableWidgetsCollection,
    ( DraggableWidgetsCollection ) => DraggableWidgetsCollection,
  );

export const isDraggableWidgetsCollectionSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.isDraggableWidgetsCollection,
    ( isDraggableWidgetsCollection ) => isDraggableWidgetsCollection,
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

export const DraggableSelectedCheckboxSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DraggableSelectedCheckbox,
    ( DraggableSelectedCheckbox ) => DraggableSelectedCheckbox,
  );