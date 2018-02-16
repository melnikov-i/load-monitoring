import * as React from 'react';

import {
  DashboardInterface,
  // MainHeaderInterface
} from '@src/interfaces';

import {
  // DashboardText,
  MainComponentWrapper,
  MainComponentContent,
  MainWidgetWrapper,
  MainWidgetContent,
  MainComponentWidgetHeaderWrapper,
  MainComponentWidgetHeader,

  // StaticDashboardGridLayout,
  // StaticDashboardGridWrapper,
  // StaticDashboardGridItem,

} from '@src/styled';

interface StaticDashboardProps {
  SelectedCheckbox: string,
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
    SelectedCheckbox,
    // id,
    // DashboardWasRequestedFromAPI,
    // makeDashboardRequestFromAPI,
    DashboardCollection,
    // MainHeaderButtonWasClicked,
  } = props;

  return (
      <MainComponentWrapper>
        <MainComponentContent
          bg={false}
        >
          {DashboardCollection.dash_data.map((e, i) => (
            <MainWidgetWrapper
              width={SelectedCheckbox}
              margin={i}
              key={i}
            >
              <MainWidgetContent>
                <MainComponentWidgetHeaderWrapper>
                  <MainComponentWidgetHeader>
                    { e.widget_name }
                  </MainComponentWidgetHeader>
                </MainComponentWidgetHeaderWrapper>
              </MainWidgetContent>
            </MainWidgetWrapper>
          ))}
        </MainComponentContent>
      </MainComponentWrapper>
  );    
};
