import * as React from 'react';

import { WidgetInterface } from '@src/interfaces';
import { DashboardWidgetConnected } from '@src/connected';

export default (
  { widget_name, id }: {
    widget_name: WidgetInterface['widget_name'],
    id: WidgetInterface['device_id'] & WidgetInterface['widget_name']
  }) => (
  <DashboardWidgetConnected widget_name={widget_name} id={id} />
);