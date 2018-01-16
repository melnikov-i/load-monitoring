import * as React from 'react';

import {
  DevicesLoadLayout,
  DevicesLoadInfo,
  DevicesLoadInfoSpan,
} from '@src/styled';

import {
  DevicesTableInterface,
  // LoadParamsInterface
} from '@src/interfaces';

interface DevicesLoadProps {
  id: DevicesTableInterface['to'],
  // DevicesLoadCollection: LoadParamsInterface,
  // getCurrentDeviceLoadParamsFromAPI:
  // ( payload: DevicesTableInterface['to'] ) => any,
}

export const DevicesLoad: React.SFC<DevicesLoadProps> = (props) => {
  const {
    // id,
    // DevicesLoadCollection,
    // getCurrentDeviceLoadParamsFromAPI,
  } = props;

  // const getDeviceLoadParams = () => {
    // if ( DevicesLoadCollection[id] !== undefined ) {
      // getCurrentDeviceLoadParamsFromAPI(id);
      // return DevicesLoadCollection[id];
    // }
  // };
  // const deviceLoadParams = getDeviceLoadParams();
  
  // console.log('============');
  // console.log(
  //   'DevicesLoadCollection:',
  //   DevicesLoadCollection[id]
  // );
  // console.log('============');

        // { deviceLoadParams.loading.cpu + '%' }
        // { deviceLoadParams.loading.ram + '%'}
        
  return (
    <DevicesLoadLayout>
      <DevicesLoadInfo>
        <DevicesLoadInfoSpan>
          { 'CPU:' }
        </DevicesLoadInfoSpan>
      </DevicesLoadInfo>
      <DevicesLoadInfo>
        <DevicesLoadInfoSpan>
          { 'RAM:' }
        </DevicesLoadInfoSpan>
      </DevicesLoadInfo>
    </DevicesLoadLayout>
  );
};