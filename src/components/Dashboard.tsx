import * as React from 'react';

import {
  DashboardInterface,
  MainHeaderInterface,
  WidgetInterface,
} from '@src/interfaces';

import { Spinner } from '@src/components';
import MainHeaderConnected from
  '@src/usage/MainHeaderUsage';  
import DashboardGridSettingsConnected from
  '@src/usage/DashboardGridSettingsUsage';
import DashboardDragDropContextConnected from
  '@src/usage/DashboardDragDropContextUsage';
import DashboardWidgetConnected from
  '@src/usage/DashboardWidgetUsage';

import {
  DynamicWidthWidgetsLayout,
  DynamicWidthWidgetWrapper,
} from '@src/styled';

interface DashboardProps {
  id: DashboardInterface['dash_id']['dashboard_id'],
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
  MainHeaderButtonWasClicked: boolean,
}


export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    SelectedCheckbox,
    DashboardCollection,
    MainHeaderButtonWasClicked,
  } = props;
  

  if ( DashboardWasRequestedFromAPI !== id ) {
    makeDashboardRequestFromAPI(id);
  } else {
    if ( DashboardCollection.dash_id.dashboard_id !== id ) {
      return (
        <Spinner
          width={3}
          color={'#2f4050'}
          bgColor={'#f3f3f4'}
        />
      );
    }      
  }
    
  // Данные для заголовка
  const MainHeaderState: MainHeaderInterface = {
    header: DashboardCollection.dash_id.dashboard_name,
    button: true,
    breadcrumbs: [
      {
        href: '',
        title: 'Главная',
      },
      {
        href: 'devices',
        title: 'Все устройства',
      },
      {
        href: DashboardCollection.dash_id.dashboard_name,
        title: DashboardCollection.dash_id.dashboard_name,
      }
    ],
  };

  if ( MainHeaderButtonWasClicked ) {
    /* Настройка дашборда */
    return (
      <div>
        <MainHeaderConnected data={MainHeaderState} />
        <DashboardGridSettingsConnected />
        <DashboardDragDropContextConnected />
      </div>
    );
  } else {
    /* Отображение дашборда */
    return (
      <div>
        <MainHeaderConnected data={MainHeaderState} />
        <DynamicWidthWidgetsLayout>          
          {DashboardCollection.dash_data.map((e, i) => {
            const item: WidgetInterface = {
              widget_name: e.widget_name,
              device_id: e.device_id,
              isPreview: false,
            }
            return (
              <DynamicWidthWidgetWrapper
                width={SelectedCheckbox}
                margin={i + 1}
                key={i}
              >
                <DashboardWidgetConnected item={item} />
              </DynamicWidthWidgetWrapper>

            );
          })}
        </DynamicWidthWidgetsLayout>
      </div>
    );
  }
};