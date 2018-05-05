import * as React from 'react';

import {
  WidgetInterface,
  DashboardInterface,
  ElementsOfDashboardCollectionInterface
} from '@src/interfaces';
import { DashboardWidgetConnected } from '@src/connected';

export default (
  { widget_name, width, margin, elements, makeSeriesDataRequestFromAPI }: {
    widget_name: WidgetInterface['widget_name'],
    width: DashboardInterface['dash_id']['dash_columns'],
    margin: number | undefined,
    elements: ElementsOfDashboardCollectionInterface,
    makeSeriesDataRequestFromAPI: any,
  }) => (
  <DashboardWidgetConnected
    // SeriesDataCollection={undefined}
    makeSeriesDataRequestFromAPI={makeSeriesDataRequestFromAPI}
    widget_name={widget_name}
    width={width}
    elements={elements}
    margin={margin}
  />
);