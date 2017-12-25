import * as React from 'react';

import {
  DevicesLayout,
  DevicesHeader,
  DevicesTable,
  DevicesTableHead,
  DevicesTableRow,
  DevicesTableHeadColl,
  DevicesTableHeadCollDev,
  DevicesTableHeadCollIP,
  DevicesTableHeadCollLoad,
  DevicesTableHeadLastColl,
  DevicesTableHeadCollInfo,
} from '@src/styled';

interface DevicesProps {

}

export const Devices: React.SFC<DevicesProps> = () => {
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
      </DevicesTable>
    </DevicesLayout>
  );
};
