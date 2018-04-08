import * as React from 'react';

import {
  WidgetInterface,
  DashboardInterface,
} from '@src/interfaces';

import { DashboardDragWidgetConnected } from '@src/connected';

export default (
  { widget_name, width, margin }: {
    widget_name: WidgetInterface['widget_name'],
    width: DashboardInterface['dash_id']['dash_columns'],
    margin: number | undefined,
  }) => (
  <DashboardDragWidgetConnected
    SeriesDataCollection={undefined}
    widget_name={widget_name}
    width={width}
    margin={margin}
  />
);