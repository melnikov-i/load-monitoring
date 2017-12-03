import * as React from 'react';

import {
  DevicesLayout,
  DevicesHeader,
  DevicesTable,
  DevicesTableHead,
  DevicesTableHeadRow,
  DevicesTableHeadColl,
  DevicesTableHeadFirstColl,
  DevicesTableHeadLastColl,
  DevicesTableHeadBigColl,
} from '@src/styled';

interface DevicesProps {

}

export const Devices: React.SFC<DevicesProps> = () => {
  return (
    <DevicesLayout>
      <DevicesHeader>{'Все устройства'}</DevicesHeader>
      <DevicesTable>
        <DevicesTableHead>
          <DevicesTableHeadRow>
            <DevicesTableHeadFirstColl></DevicesTableHeadFirstColl>
            <DevicesTableHeadColl>
              {'Устройство'}
            </DevicesTableHeadColl>
            <DevicesTableHeadColl>
              {'IP-адрес'}
            </DevicesTableHeadColl>
            <DevicesTableHeadBigColl>
              {'Информация о системе'}
            </DevicesTableHeadBigColl>
            <DevicesTableHeadColl>
              {'Нагрузка'}
            </DevicesTableHeadColl>
            <DevicesTableHeadColl>
              {'Статус'}
            </DevicesTableHeadColl>
            <DevicesTableHeadLastColl>
              {'Устройство'}
            </DevicesTableHeadLastColl>
          </DevicesTableHeadRow>
        </DevicesTableHead>
      </DevicesTable>
    </DevicesLayout>
  );
}