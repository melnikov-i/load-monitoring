import * as React from 'react';

import { WidgetInterface } from '@src/interfaces';
import { DashboardDragSourceDropTargetConnected } from '@src/connected';

export default ({element}: {element: WidgetInterface}) => (
  <DashboardDragSourceDropTargetConnected element={element} />
);