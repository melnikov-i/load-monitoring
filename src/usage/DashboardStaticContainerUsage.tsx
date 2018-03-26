import * as React from 'react';

import { DashboardInterface } from '@src/interfaces';
import { DashboardStaticContainer } from '@src/components';

export default (
  { width, widgets }: {
    widgets: DashboardInterface['dash_data'],
    width: DashboardInterface['dash_id']['dash_columns'],
  }) => (
  <DashboardStaticContainer width={width} widgets={widgets} />
);