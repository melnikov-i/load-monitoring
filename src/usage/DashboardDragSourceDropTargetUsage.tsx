import * as React from 'react';

import { DashboardWidgetWrapperInterface } from '@src/interfaces';
import { DashboardDragSourceDropTargetConnected } from '@src/connected';

export default ({element}: {element: DashboardWidgetWrapperInterface}) => (
  <DashboardDragSourceDropTargetConnected element={element} />
);