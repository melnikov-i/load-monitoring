import * as React from 'react';

import {
  DashboardWidgetInterface,
} from '@src/interfaces';

import {
  DynamicWidthWidgetWrapper,
  DynamicWidthWidgetContent,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
} from '@src/styled';

interface StaticDashboardProps {
  element: DashboardWidgetInterface,
}


export const DashboardWidget: React.SFC<StaticDashboardProps> = 
(props) => {
  const {
    element,
  } = props;

  return (
    <DynamicWidthWidgetWrapper
      width={element.width}
      margin={element.index}
    >
      <DynamicWidthWidgetHeaderWrapper>
        <WidgetHeader>{ element.widget_name }</WidgetHeader>
      </DynamicWidthWidgetHeaderWrapper>
      <DynamicWidthWidgetContent>

      </DynamicWidthWidgetContent>
    </DynamicWidthWidgetWrapper>
  );    
};