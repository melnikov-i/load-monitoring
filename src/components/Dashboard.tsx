import * as React from 'react';

import {
  DashboardInterface,
} from '@src/interfaces';

import { Spinner } from '@src/components';

interface DashboardProps {
  DashboardWasRequestedFromAPI: boolean,
  makeDashboardRequestFromAPI: () => any,
  DashboardCollection: DashboardInterface,
}

export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    DashboardCollection,
  } = props;

  const getDashboard = () => {
    if ( !DashboardWasRequestedFromAPI ) {
      makeDashboardRequestFromAPI();
    }
    return DashboardCollection;
  }
  const Dashboard = getDashboard();

  if ( Dashboard.dash_id.id !== '' ) {
    return (
      <div>
        
      </div>
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