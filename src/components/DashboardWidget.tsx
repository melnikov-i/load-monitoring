import * as React from 'react';

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
      </DynamicWidthWidgetContent>
    </DynamicWidthWidget>
  );
}