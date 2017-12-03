import * as React from 'react';

import {
  DashBoardLayout,
  DashBoardTop,
  DashBoardMainHeaderWrapper,
  DashBoardMainHeader,
  DashBoardIntervalsAndSettingsWrapper,
  DashBoardSettingsWrapper,
  DashBoardSettings,
  DashBoardMenuWrapper,
  DashBoardMenuItem,
  DashBoardMenuLink
} from '@src/styled';

// import DashBoardHeadConnected 
//   from '@src/connected/DashBoardHeadConnected.usage';
// import DashBoardBodyConnected 
//   from '@src/connected/DashBoardBodyConnected.usage';

interface DashBoardProps {

}

type MenyItemsType = {
  link: string,
  value: string,
};


export const DashBoard: React.SFC<DashBoardProps> = () => {
  const MenuItems: MenyItemsType[] = [
    {
      link: '/dashboard/overview',
      value: 'Обзор',
    },
    {
      link: '/dashboard/cpuplusmemory',
      value: 'Процессор и память',
    },
    {
      link: '/dashboard/hdd',
      value: 'Жесткие диски',
    },
    {
      link: '/dashboard/network',
      value: 'Сетевые интерфейсы',
    },
    {
      link: '/dashboard/system',
      value: 'Операционная система',
    }
  ];

  return (
    <DashBoardLayout>
      <DashBoardTop>
        <DashBoardMainHeaderWrapper>
          <DashBoardMainHeader>
            {'main'}
          </DashBoardMainHeader>
        </DashBoardMainHeaderWrapper>
        <DashBoardIntervalsAndSettingsWrapper>
          <DashBoardSettingsWrapper>
            <DashBoardSettings href={'http://google.ru/'}>
              {'свойства'}
            </DashBoardSettings>
          </DashBoardSettingsWrapper>
        </DashBoardIntervalsAndSettingsWrapper>
        <DashBoardMenuWrapper>
          <ul>
            {
              MenuItems.map((e, i) => (
                <DashBoardMenuItem key={i}>
                  <DashBoardMenuLink
                    to={e.link}
                    activeStyle={{
                      color: '#555',
                      borderTop: '#e0e0e0',
                    }}
                  >{e.value}
                  </DashBoardMenuLink>
                </DashBoardMenuItem>
              ))
            }
          </ul>
        </DashBoardMenuWrapper>
      </DashBoardTop>
    </DashBoardLayout>
  );
};