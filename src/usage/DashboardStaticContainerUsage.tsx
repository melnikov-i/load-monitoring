import * as React from 'react';

import { DashboardInterface } from '@src/interfaces';
import { DashboardStaticContainer } from '@src/components';

export default ({items}: {items: DashboardInterface}) => (
  <DashboardStaticContainer items={items} />
);