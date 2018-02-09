import * as React from 'react';

import {
  DashboardInterface,
  MainHeaderInterface
} from '@src/interfaces';

import {
  // DashboardLayout,
  DashboardText,
  MainComponentWrapper,
  MainComponentContent,
} from '@src/styled';

import { Spinner } from '@src/components';
import MainHeaderConnected from
  '@src/connected/MainHeaderConnected.usage';

interface DashboardProps {
  id: DashboardInterface['dash_id']['dashboard_id'],
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  DashboardCollection: DashboardInterface,
  reorderDashboardCollection:
  (payload: DashboardInterface['dash_data']) => any,
}


export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    DashboardCollection,
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
    breadcrumbs: [
      {
        href: '',
        title: 'Home',
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

  return (
    <div>
      <MainHeaderConnected data={MainHeaderState} />
      <MainComponentWrapper>
        <MainComponentContent
          isLogin={false}
          bg={false}
        >
          {DashboardCollection.dash_data.map((e, i) => (
            <div key={i}>
              <DashboardText>
                {'Device ID: ' + e.device_id }
              </DashboardText>
              <DashboardText>
                {'Widget Name: ' + e.widget_name }
              </DashboardText>
            </div>
          ))}            
        </MainComponentContent>
      </MainComponentWrapper>
    </div>
  );    
}
