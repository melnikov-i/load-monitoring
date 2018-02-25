import * as React from 'react';

import { DashboardWidgetWrapperInterface } from '@src/interfaces';
import { DashboardWidgetWrapperConnected } from '@src/connected';

export default ({element}: {element: DashboardWidgetWrapperInterface } ) => (
  <DashboardWidgetWrapperConnected element={element} />
);