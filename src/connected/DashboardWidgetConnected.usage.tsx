import * as React from 'react';

import { DashboardWidgetWrapperInterface } from '@src/interfaces';
import { DashboardWidgetConnected } from '@src/connected';

export default ({element}: {element: DashboardWidgetWrapperInterface}) => (
  <DashboardWidgetConnected element={element} />
);