import * as React from 'react';

import {
  DevicesLoadLayout,
  DevicesStatusInfo,
  DevicesStatusInfoLabel
} from '@src/styled';

import {
  LoadParamsInterface
} from '@src/interfaces';

interface DevicesStatusProps {
  DevicesLoadCurrentItem: LoadParamsInterface,
}

export const DevicesStatus: React.SFC<DevicesStatusProps> = (props) => {
  const {
    DevicesLoadCurrentItem,
  } = props;

  const date = new Date(DevicesLoadCurrentItem.lastconn * 1000);

  return (
    <DevicesLoadLayout>
      {DevicesLoadCurrentItem.state === 'online'
        ? <DevicesStatusInfoLabel status={'online'}>
           {'Online'}
          </DevicesStatusInfoLabel>
        : <DevicesStatusInfoLabel status={'offline'}>
           {'Offline'}
          </DevicesStatusInfoLabel>
      }
      <DevicesStatusInfo>
        {
          date.getDate()
          + ((date.getMonth() > 8 ) ? '.' : '.0')
          + (date.getMonth() + 1)
          + '.' + date.getFullYear()
        }
      </DevicesStatusInfo>
      <DevicesStatusInfo>
        {
          ((date.getHours() > 9) ? '' : '0') + date.getHours()
          + ((date.getMinutes() > 9) ? ':' : ':0') + date.getMinutes()
          + ((date.getSeconds() > 9) ? ':' : ':0') + date.getSeconds()
        }
      </DevicesStatusInfo>
    </DevicesLoadLayout>
  );
};