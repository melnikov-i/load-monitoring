import * as React from 'react';
// import { Switch, Route,  } from 'react-router-dom';


import {
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

type MenyItemsType = {
  link: string,
  value: string,
};

export const DashBoardHead: React.SFC<undefined> = () => {
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
  );
};