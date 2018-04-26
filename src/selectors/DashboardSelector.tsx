import { createSelector } from 'reselect';

import { RootState } from '@src/redux';
import {
  DashboardWidgetProps,
  DashboardDragWidgetProps
} from '@src/components';

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


export const SeriesDataCollectionSelector = createSelector(
    ( state: RootState,
      props: DashboardWidgetProps | DashboardDragWidgetProps ) => 
      state.dashboard.SeriesDataCollection[props.widget_name],
    ( SeriesDataCollectionItem ) => SeriesDataCollectionItem
  );


/* имя узла, к которому привязан action makeSeriesDataRequestFromAPI */
export const ElementsOfDashboardCollectionSelector =
  createSelector(
    ( state: RootState ) => 
      state.dashboard.ElementsOfDashboardCollection,
    ( ElementsOfDashboardCollection ) => ElementsOfDashboardCollection,
  );

/* Ключ состояния компонента, используемый для выбора Вида */
export const DashboardStateKeySelector =
  createSelector(
    ( state: RootState ) => state.dashboard.DashboardStateKey,
    ( DashboardStateKey ) => DashboardStateKey,
  );

/* Ключ актуальности дашборда при старте страницы */
export const isDashboardDragModelCopiedSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.isDashboardDragModelCopied,
    ( isDashboardDragModelCopied ) => isDashboardDragModelCopied,
  );

/* ID целевого элемента при перемещении виджета. */
export const currentTargetIdSelector =
  createSelector(
    ( state: RootState ) => state.dashboard.currentTargetId,
    ( currentTargetId ) => currentTargetId,
  );


export const MainHeaderButtonWasClickedSelector =
  createSelector(
    ( state: RootState ) => state.mainHead.MainHeaderButtonWasClicked,
    ( MainHeaderButtonWasClicked ) => MainHeaderButtonWasClicked,
  );