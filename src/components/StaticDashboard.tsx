import * as React from 'react';

import {
  DashboardInterface,
  // MainHeaderInterface
} from '@src/interfaces';

import {
  DashboardText
} from '@src/styled';

// import { Spinner } from '@src/components';
// import MainHeaderConnected from
//   '@src/connected/MainHeaderConnected.usage';


interface StaticDashboardProps {
  // id: DashboardInterface['dash_id']['dashboard_id'],
  // DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  // makeDashboardRequestFromAPI: 
  // (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  DashboardCollection: DashboardInterface,
  // reorderDashboardCollection:
  // (payload: DashboardInterface['dash_data']) => any,
  // MainHeaderButtonWasClicked: boolean,
}


export const StaticDashboard: React.SFC<StaticDashboardProps> = 
(props) => {
  const {
    // id,
    // DashboardWasRequestedFromAPI,
    // makeDashboardRequestFromAPI,
    DashboardCollection,
    // MainHeaderButtonWasClicked,
  } = props;

  // if ( DashboardCollection.dash_id.dashboard_id === '' ) {
  //   if ( DashboardWasRequestedFromAPI !== id ) {
  //     makeDashboardRequestFromAPI(id);
  //   } else {
  //     return (
  //       <Spinner
  //         width={3}
  //         color={'#2f4050'}
  //         bgColor={'#f3f3f4'}
  //       />
  //     );
  //   }    
  // }

  // console.log(
  //   'MainHeaderButtonWasClicked:', 
  //   MainHeaderButtonWasClicked
  // );

  // Данные для заголовка
  // const MainHeaderState: MainHeaderInterface = {
  //   header: DashboardCollection.dash_id.dashboard_name,
  //   button: true,
  //   breadcrumbs: [
  //     {
  //       href: '',
  //       title: 'Главная',
  //     },
  //     {
  //       href: 'devices',
  //       title: 'Все устройства',
  //     },
  //     {
  //       href: DashboardCollection.dash_id.dashboard_name,
  //       title: DashboardCollection.dash_id.dashboard_name,
  //     }
  //   ],
  // };

  return (
    <div>
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
    </div>
  );    
};
