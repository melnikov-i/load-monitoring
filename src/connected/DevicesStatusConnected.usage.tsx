import * as React from 'react';

import { DevicesTableInterface } from '@src/interfaces';
import { DevicesStatusConnected } from '@src/connected';

export default ( {id}: {id: DevicesTableInterface['to']} ) => (
  <DevicesStatusConnected id={id} />
);