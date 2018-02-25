import * as React from 'react';

import {
  DashboardInterface,
  MainHeaderInterface,
  // DashboardWidgetInterface
} from '@src/interfaces';

import { Spinner } from '@src/components';
import MainHeaderConnected from
  '@src/connected/MainHeaderConnected.usage';
import DashboardGridSettingsConnected from
  '@src/connected/DashboardGridSettingsConnected.usage';
import DashboardGridConnected from
  '@src/connected/DashboardGridConnected.usage';

import {
  DynamicWidthWidgetsLayout,
} from '@src/styled';

interface DashboardProps {
  id: DashboardInterface['dash_id']['dashboard_id'],
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  DashboardCollection: DashboardInterface,
  reorderDashboardCollection:
  (payload: DashboardInterface['dash_data']) => any,
  MainHeaderButtonWasClicked: boolean,
}


export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    DashboardCollection,
    MainHeaderButtonWasClicked,
  } = props;

  if ( DashboardCollection.dash_id.dashboard_id === '' ) {
    if ( DashboardWasRequestedFromAPI !== id ) {
      makeDashboardRequestFromAPI(id);
    } else {
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
    // Включен режим настройки дашборда
    return (
      <div>
        <MainHeaderConnected data={MainHeaderState} />
        <DashboardGridSettingsConnected />
        <DashboardGridConnected />
      </div>
    );
  } else {
    return (
      <div>
        <MainHeaderConnected data={MainHeaderState} />
        <DynamicWidthWidgetsLayout>
          {DashboardCollection.dash_data.map((e, i) => {
            // const element: DashboardWidgetInterface = {
            //   index: i + 1,
            //   width: SelectedCheckbox,
            //   widget_name: e.widget_name,
            //   device_id: e.device_id,
            // }
            return null;
          })}
        </DynamicWidthWidgetsLayout>
      </div>
    );
  }

};
  // return (
  //   <div>
  //     <MainHeaderConnected data={MainHeaderState} />
  //     {( !MainHeaderButtonWasClicked )
  //       ? <DraggableDashboardConnected />
  //       : <StaticDashboardConnected />
  //     }
  //   </div>
  // );
