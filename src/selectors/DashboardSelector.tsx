import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

/* Модель дашборда для статического отображения */
export const DashboardStaticModelSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DashboardStaticModel,
    ( DashboardStaticModel ) => DashboardStaticModel,
  );

/* Модель дашборда для конфигурирования */
export const DashboardDragModelSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DashboardDragModel,
    ( DashboardDragModel ) => DashboardDragModel,
  );

/* Идентификатор текущего дашборда для запроса */
export const DashboardWasRequestedFromAPISelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DashboardWasRequestedFromAPI,
    ( DashboardWasRequestedFromAPI ) => DashboardWasRequestedFromAPI,
  );

/* Ключ актуальности дашборда при старте страницы */
export const isDashboardDragModelCopiedSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.isDashboardDragModelCopied,
    ( isDashboardDragModelCopied ) => isDashboardDragModelCopied,
  );





// export const DashboardCollectionSelector =
//   createSelector(
//     ( state: RootState ) => state.dashboard.DashboardCollection,
//     ( DashboardCollection ) => DashboardCollection,
//   );

// export const DraggableWidgetsCollectionSelector =
//   createSelector(
//     ( state: RootState ) => state.dashboard.DraggableWidgetsCollection,
//     ( DraggableWidgetsCollection ) => DraggableWidgetsCollection,
//   );

// export const isDraggableWidgetsCollectionSelector =
//   createSelector(
//     ( state: RootState ) => state.dashboard.isDraggableWidgetsCollection,
//     ( isDraggableWidgetsCollection ) => isDraggableWidgetsCollection,
//   );


export const MainHeaderButtonWasClickedSelector =
  createSelector(
    ( state: RootState ) => state.mainHead.MainHeaderButtonWasClicked,
    ( MainHeaderButtonWasClicked ) => MainHeaderButtonWasClicked,
  );

// export const SelectedCheckboxSelector =
//   createSelector(
//     ( state: RootState ) => state.dashboard.SelectedCheckbox,
//     ( SelectedCheckbox ) => SelectedCheckbox,
//   );

// export const DraggableSelectedCheckboxSelector =
//   createSelector(
//     ( state: RootState ) => state.dashboard.DraggableSelectedCheckbox,
//     ( DraggableSelectedCheckbox ) => DraggableSelectedCheckbox,
//   );