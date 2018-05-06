import * as React from 'react';

import {
  DashboardInterface,
  ElementsOfDashboardCollectionInterface
} from '@src/interfaces';
import { DashboardStaticContainer } from '@src/components';

export default (
  { width, widgets, elements }: {
    widgets: DashboardInterface['dash_data'],
    width: DashboardInterface['dash_id']['dash_columns'],
    elements: ElementsOfDashboardCollectionInterface,
  }) => (
  <DashboardStaticContainer
    width={width}
    widgets={widgets}
    elements={elements}
  />
);