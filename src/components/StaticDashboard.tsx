import * as React from 'react';

import {
  DashboardInterface,
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
  DashboardCollection: DashboardInterface,
}


export const StaticDashboard: React.SFC<StaticDashboardProps> = 
(props) => {
  const {
    SelectedCheckbox,
    DashboardCollection,
  } = props;

  return (
    <DynamicWidthWidgetsLayout>
      {DashboardCollection.dash_data.map((e, i) => (
        // Виджет
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
        //
      ))}
    </DynamicWidthWidgetsLayout>
  );    
};