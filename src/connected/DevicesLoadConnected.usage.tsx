import * as React from 'react';

import { DevicesTableInterface } from '@src/interfaces';
import { DevicesLoadConnected } from '@src/connected';

export default ( {id}: {id: DevicesTableInterface['to']} ) => (
  <DevicesLoadConnected id={id} />
);