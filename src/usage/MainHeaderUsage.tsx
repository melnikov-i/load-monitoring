import * as React from 'react';

import { MainHeaderInterface } from '@src/interfaces';
import { MainHeaderConnected } from '@src/connected';

export default ({data}: {data: MainHeaderInterface}) => (
  <MainHeaderConnected data={data} />
);