import * as React from 'react';

import { DeviceItemsInterface } from '@src/interfaces';
import { DeviceConnected } from '@src/connected';

export default ({ items }: { items: DeviceItemsInterface }) => (
  <DeviceConnected items={ items } />
);