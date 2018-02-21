import * as React from 'react';

import { DashboardWidgetInterface } from '@src/interfaces';
import { DashboardWidgetConnected } from '@src/connected';

export default ({element}: {element: DashboardWidgetInterface } ) => (
  <DashboardWidgetConnected element={element} />
);