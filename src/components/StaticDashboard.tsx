import * as React from 'react';

import {
  DashboardInterface,
  DashboardWidgetInterface
} from '@src/interfaces';

import DashboardWidgetConnected from 
  '@src/connected/DashboardWidgetConnected.usage';

import {
  DynamicWidthWidgetsLayout,
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
      {DashboardCollection.dash_data.map((e, i) => {
        const element: DashboardWidgetInterface = {
          index: i + 1,
          width: SelectedCheckbox,
          widget_name: e.widget_name,
          device_id: e.device_id,
        }
        return (
            <DashboardWidgetConnected key={i} element={element} />
          );
        })}
      ))}
    </DynamicWidthWidgetsLayout>
  );    
};