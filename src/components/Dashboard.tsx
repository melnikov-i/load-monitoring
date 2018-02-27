import * as React from 'react';

import {
  DashboardInterface,
  MainHeaderInterface,
  // DashboardWidgetInterface
} from '@src/interfaces';

import { Spinner } from '@src/components';
import MainHeaderConnected from
  '@src/usage/MainHeaderUsage';
import DashboardGridSettingsConnected from
  '@src/usage/DashboardGridSettingsUsage';
import DashboardGridConnected from
  '@src/usage/DashboardGridUsage';

import {
  DynamicWidthWidgetsLayout,
  DynamicWidthWidgetWrapper,
  DynamicWidthWidget,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
  DynamicWidthWidgetContent,
} from '@src/styled';

interface DashboardProps {
  id: DashboardInterface['dash_id']['dashboard_id'],
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  SelectedCheckbox: string,
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
    SelectedCheckbox,
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
            return (
              <DynamicWidthWidgetWrapper
                width={SelectedCheckbox}
                margin={i + 1}
                key={i}
              >
                <DynamicWidthWidget>
                  <DynamicWidthWidgetHeaderWrapper>
                    <WidgetHeader>{ e.widget_name }</WidgetHeader>
                  </DynamicWidthWidgetHeaderWrapper>
                  <DynamicWidthWidgetContent>

                  </DynamicWidthWidgetContent>
                </DynamicWidthWidget>
              </DynamicWidthWidgetWrapper>
            );
          })}
        </DynamicWidthWidgetsLayout>
      </div>
    );
  }
};
