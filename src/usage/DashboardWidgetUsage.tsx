import * as React from 'react';

import { WidgetInterface } from '@src/interfaces';
import { DashboardWidgetConnected } from '@src/connected';

export default ({ item }: { item: WidgetInterface }) => (
  <DashboardWidgetConnected item={item} />
);