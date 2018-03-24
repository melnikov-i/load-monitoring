import * as React from 'react';

import { DashboardDragWidgetInterface } from '@src/interfaces';
import { DashboardDragWidgetConnected } from '@src/connected';

export default ( {item}: { item: DashboardDragWidgetInterface } ) => (
  <DashboardDragWidgetConnected item={item} />
);