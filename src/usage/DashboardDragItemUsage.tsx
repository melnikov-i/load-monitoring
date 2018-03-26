import * as React from 'react';

import {
  DashboardInterface,
  WidgetInterface
} from '@src/interfaces';
import { DashboardDragItemConnected } from '@src/connected';

export default (
  {widget_name, width, id, margin, moveWidget, findWidget}: {
    widget_name: WidgetInterface['widget_name'],
    width: DashboardInterface['dash_id']['dash_columns'],
    id: string,
    margin: number,
    moveWidget: any,
    findWidget: any,
  }) => (
  <DashboardDragItemConnected 
    widget_name={widget_name}
    moveWidget={moveWidget}
    findWidget={findWidget}
    width={width}
    id={id}
    margin={margin}
   />
);