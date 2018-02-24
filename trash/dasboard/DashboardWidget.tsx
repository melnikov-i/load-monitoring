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


interface CollectType {
  connectDragSource: any,
  isDragging: any,
}

interface StaticDashboardProps {
  element: DashboardWidgetInterface,
}

type WidgetProps = StaticDashboardProps & CollectType;

export const DashboardWidget: React.SFC<WidgetProps> = (props) => {
  const {
    element,
    connectDragSource,
  } = props;

  return connectDragSource(
    <div
      style={{
        display: 'inline-block',
        verticalAlign: 'top'
      }}
    >
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
    </div>
  );    
};