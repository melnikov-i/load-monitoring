import * as React from 'react';

import {
  DevicesLoadLayout,
  DevicesLoadInfo,
  DevicesLoadInfoSpan,
} from '@src/styled';

import {
  DevicesTableInterface,
  LoadParamsInterface
} from '@src/interfaces';

interface DevicesLoadProps {
  id: DevicesTableInterface['to'],
  DevicesLoadCurrentItem: LoadParamsInterface,
  makeDevicesLoadItemRequestFromAPI:
  ( payload: DevicesTableInterface['to'] ) => any,
}

export const DevicesLoad: React.SFC<DevicesLoadProps> = (props) => {
  const {
    id,
    DevicesLoadCurrentItem,
    makeDevicesLoadItemRequestFromAPI,
  } = props;

  makeDevicesLoadItemRequestFromAPI(id);

  // console.log('Current_ID:', id);
  // console.log('Current_ITEM:', DevicesLoadCurrentItem);

  return (
    <DevicesLoadLayout>
      <DevicesLoadInfo>
        <DevicesLoadInfoSpan>
          { 'CPU:' }
        </DevicesLoadInfoSpan>
        {(DevicesLoadCurrentItem.loading.cpu === '')
          ? '0%'
          : DevicesLoadCurrentItem.loading.cpu + '%'
        }
      </DevicesLoadInfo>
      <DevicesLoadInfo>
        <DevicesLoadInfoSpan>
          { 'RAM:' }
        </DevicesLoadInfoSpan>
        {(DevicesLoadCurrentItem.loading.ram === '')
          ? '0%'
          : DevicesLoadCurrentItem.loading.ram + '%'
        }
      </DevicesLoadInfo>
    </DevicesLoadLayout>
  );
};