import * as React from 'react';
import * as rd3 from 'react-d3';

const AreaChart = rd3.AreaChart;

import {
  WidgetInterface,
} from '@src/interfaces';

import {
  DynamicWidthWidget,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
  DynamicWidthWidgetContent,
} from '@src/styled';

interface DashboardWidgetProps {
  item: WidgetInterface,
}

export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const { item } = props;
  return (
    <DynamicWidthWidget>
      <DynamicWidthWidgetHeaderWrapper>
        <WidgetHeader>{ item.widget_name }</WidgetHeader>
      </DynamicWidthWidgetHeaderWrapper>
      <DynamicWidthWidgetContent>
        <span
          style={{
            fontSize: '14px',
          }}
        >
          {item.device_id}
        </span>
        <AreaChart
          width={250}
          height={250}
          data={[
            [
              { x: 1, y: 20 },
              { x: 2, y: 10 },
              { x: 3, y: 25 }
            ]
          ]}
        />
      </DynamicWidthWidgetContent>
    </DynamicWidthWidget>
  );
}