import * as React from 'react';

import {
  DevicesLoadLayout
} from '@src/styled';

import {
  DevicesTableInterface
} from '@src/interfaces';

interface DevicesLoadProps {
  id: DevicesTableInterface['to'],

}

export const DevicesLoad: React.SFC<DevicesLoadProps> = (props) => {
  const { id } = props;
  console.log('id', id);
  return (
    <DevicesLoadLayout>
      { id }
    </DevicesLoadLayout>
  );
};