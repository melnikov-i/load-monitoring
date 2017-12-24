import * as React from 'react';

import {
  DeviceHeader
} from '@src/styled';

import {
  DeviceItemsInterface,
} from '@src/interfaces';

interface DeviceProps {
  items: DeviceItemsInterface
}

export const Device: React.SFC<DeviceProps> = ( props ) => {
  const { items } = props;
  return (
    <DeviceHeader>Device: { items.id }</DeviceHeader>
  );
};