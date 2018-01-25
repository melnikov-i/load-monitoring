import * as React from 'react';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardLayout,
  DashboardText
} from '@src/styled';

import { Spinner } from '@src/components';

interface DashboardProps {
  id: DashboardInterface['dash_id']['id'],
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['id'],
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['id']) => any,
  DashboardCollection: DashboardInterface,
}

export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    DashboardCollection,
  } = props;

  const getDashboard = () => {
    if ( DashboardWasRequestedFromAPI !== id ) {
      console.log('request');
      makeDashboardRequestFromAPI(id);
    }
    return DashboardCollection;
  }
  const Dashboard = getDashboard();

  console.log('Dashboard:', Dashboard);
  // console.log('ID', id);

  if ( Dashboard.dash_id.id !== '' ) {
    return (
      <DashboardLayout>
        <DashboardText>
          <b>{'ID'}</b>{Dashboard.dash_id.id}
        </DashboardText>
        <DashboardText>
          <b>{'Название'}</b>{Dashboard.dash_id.dashboard_name}
        </DashboardText>
      </DashboardLayout>
    );    
  } else {
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#fff'}
      />
    );
  }

}