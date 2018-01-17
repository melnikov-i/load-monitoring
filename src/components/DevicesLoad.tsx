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

  return (
    <DevicesLoadLayout>
  {(DevicesLoadCurrentItem.loading.cpu === '')
    ? <DevicesLoadInfo>
        {'Нет связи'}
      </DevicesLoadInfo>
    : <DevicesLoadInfo>
        <DevicesLoadInfoSpan>
          { 'CPU:' }
        </DevicesLoadInfoSpan>
        { DevicesLoadCurrentItem.loading.cpu + '%' }
      </DevicesLoadInfo>
  }
  {(DevicesLoadCurrentItem.loading.cpu !== '')
    ? <DevicesLoadInfo>
        <DevicesLoadInfoSpan>
          { 'RAM:' }
        </DevicesLoadInfoSpan>
        { DevicesLoadCurrentItem.loading.ram + '%' }
      </DevicesLoadInfo>
    : null
  }
    </DevicesLoadLayout>
  );
};