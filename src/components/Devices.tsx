import * as React from 'react';

import {
  DevicesLayout,
  DevicesHeader,
  DevicesTable,
  DevicesTableHead,
  DevicesTableBody,
  DevicesTableRow,
  DevicesTableHeadColl,
  DevicesTableHeadCollDev,
  DevicesTableHeadCollIP,
  DevicesTableHeadCollLoad,
  DevicesTableHeadLastColl,
  DevicesTableHeadCollInfo,
  DevicesTableBodyColl
} from '@src/styled';

import {
  DevicesTableInterface,
} from '@src/interfaces';

import { Spinner } from '@src/components';

interface DevicesProps {
  DevicesTableItemsCollection: DevicesTableInterface[],
  DevicesItemsWasRequestedFromAPI: boolean,
  makeDevicesItemsRequestFromAPI: () => any,
}

export const Devices: React.SFC<DevicesProps> = (props) => {
  const {
    DevicesTableItemsCollection,
    DevicesItemsWasRequestedFromAPI,
    makeDevicesItemsRequestFromAPI,
  } = props;

  const getDevicesItems = (): DevicesTableInterface[] => {
    if ( !DevicesItemsWasRequestedFromAPI ) {
      makeDevicesItemsRequestFromAPI();
    }
    return DevicesTableItemsCollection;
  };
  const devicesItems = getDevicesItems();

  if ( devicesItems.length !== 0 ) {
    console.log('[DEVICES_ITEMS]:', devicesItems);
    return (
      <DevicesLayout>
        <DevicesHeader>{'Все устройства'}</DevicesHeader>
        <DevicesTable>
          <DevicesTableHead>
            <DevicesTableRow>
              <DevicesTableHeadCollDev>
                {'Устройство'}
              </DevicesTableHeadCollDev>
              <DevicesTableHeadCollIP>
                {'IP-адрес'}
              </DevicesTableHeadCollIP>
              <DevicesTableHeadCollInfo>
                {'Информация о системе'}
              </DevicesTableHeadCollInfo>
              <DevicesTableHeadCollLoad>
                {'Нагрузка'}
              </DevicesTableHeadCollLoad>
              <DevicesTableHeadColl>
                {'Статус'}
              </DevicesTableHeadColl>
              <DevicesTableHeadLastColl></DevicesTableHeadLastColl>
            </DevicesTableRow>
          </DevicesTableHead>
          <DevicesTableBody>
      {
        devicesItems.map((e, i) => {
          return (
            <DevicesTableRow 
              key={i}
            >
              <DevicesTableBodyColl>
                {e.comp_name}
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                {e.ip}
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                <p>{e.system}</p>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                
              </DevicesTableBodyColl>
            </DevicesTableRow>
          );
        })
      }
          </DevicesTableBody>
        </DevicesTable>
      </DevicesLayout>
    );
  } else {
    return (
      <Spinner
        width={5}
        color={'#2f4050'}
        bgColor={'#fff'}
      />
    );    
  }

};


// {
//   "table": [
//     {
//       "icon":"f17c",
//       "comp_name":"ubuntutest",
//       "ip":"85.30.213.184",
//       "system":"Linux-4.4.0-31-generic-i686-with-Ubuntu-14.04-trusty",
//       "cpu_name":"Intel(R) Xeon(R) CPU E5410 @ 2.33GHz",
//       "memory":"1049001984"
//     },
//     {
//       "icon":"f17a",
//       "comp_name":"SRVDC1",
//       "ip":"85.30.213.184",
//       "system":"Windows Server 2008 R2 Server Enterprise Edition (full installation) 64-bit",
//       "cpu_name":"",
//       "memory":"4294500352"
//     },
//     {
//       "icon":"f17c",
//       "comp_name":"toolbox",
//       "ip":"37.194.168.174",
//       "system":"Linux-4.11.7-1-ARCH-x86_64-with-glibc2.3.4",
//       "cpu_name":"Intel(R) Core(TM) i3-2310M CPU @ 2.10GHz",
//       "memory":"4054056960"
//     },
//     {
//       "icon":"f17c",
//       "comp_name":"solovievd",
//       "ip":"94.141.190.18",
//       "system":"Linux-4.10.0-38-generic-x86_64-with-Ubuntu-16.04-xenial",
//       "cpu_name":"Intel(R) Core(TM)2 CPU 6600 @ 2.40GHz",
//       "memory":"4140990464"
//     },
//     {
//       "icon":"f17a",
//       "comp_name":"SRVDC8",
//       "ip":"94.141.190.18",
//       "system":"Windows Server 2008 R2 Server Enterprise Edition (full installation) 64-bit",
//       "cpu_name":"Intel(R) Xeon(R) CPU E5410 @ 2.33GHz",
//       "memory":"4294500352"
//     }
//   ]
// }