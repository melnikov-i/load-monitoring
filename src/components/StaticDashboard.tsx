import * as React from 'react';

import {
  DashboardInterface,
  // MainHeaderInterface
} from '@src/interfaces';

import {
  DynamicWidthWidgetsLayout,
  DynamicWidthWidgetWrapper,
  DynamicWidthWidgetContent,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
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

      // <FullWidthWidgetWrapper bg={false}>
      //   <FullWidthWidgetContent>
  return (
    <DynamicWidthWidgetsLayout>
      {DashboardCollection.dash_data.map((e, i) => (
        <DynamicWidthWidgetWrapper
          width={SelectedCheckbox}
          margin={i + 1}
          key={i + 1}
        >
          <DynamicWidthWidgetHeaderWrapper>
            <WidgetHeader>{ e.widget_name }</WidgetHeader>
          </DynamicWidthWidgetHeaderWrapper>
          <DynamicWidthWidgetContent>

          </DynamicWidthWidgetContent>
        </DynamicWidthWidgetWrapper>
      ))}
    </DynamicWidthWidgetsLayout>
  );    
};