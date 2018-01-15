import * as React from 'react';

import {
  DevicesLoadLayout,
  DevicesLoadInfo,
  DevicesLoadInfoSpan,
} from '@src/styled';

import {
  DevicesTableInterface,
  DevicesLoadInterface
} from '@src/interfaces';

interface DevicesLoadProps {
  id: DevicesTableInterface['to'],
  DevicesLoadCollection: DevicesLoadInterface[],
  TestValue: number,
  makeTest: () => any,
}

export const DevicesLoad: React.SFC<DevicesLoadProps> = (props) => {
  const {
    DevicesLoadCollection,
    // id,
  } = props;

  // const DevicesLoadItem = () => {
  //   for ( let i = 0; i < DevicesLoadCollection.length; i++ ) {
  //     if ( DevicesLoadCollection[i].id === id )
  //       return DevicesLoadCollection[i];
  //   }
  //   return 
  // }

  
  //   DevicesLoadCollection.forEach((e) => {
  //     if ( e.id === id )
  //       return e;
  //     return {
  //       id: id,
  //       params: {
  //         state: 'unknown',
  //         lastconn: 0,
  //         loading: {
  //           cpu: '-',
  //           ram: '-'
  //         }
  //       }
  //     };
  //   });

  // console.log(
  //   'getDevicesLoadItem',
  //   getDevicesLoadItem
  // );

  // const devicesLoadItem = () => {
  //   makeDevicesLoadRequestToAPI(getDevicesLoadItem);
  //   return 
  // };
  
  console.log(
    'DevicesLoadCollection:',
    DevicesLoadCollection
  );

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