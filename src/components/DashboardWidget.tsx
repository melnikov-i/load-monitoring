import * as React from 'react';

import {
  WidgetInterface,
} from '@src/interfaces';

import {
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
  DynamicWidthWidgetContent,
} from '@src/styled';

interface CollectType {
  connectDragSource: any,
  isDragging: any,
}

interface WidgetProps {
  widgetParams: WidgetInterface
}

type DashboardWidgetProps = WidgetProps & CollectType;

export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const {
    widgetParams,
    connectDragSource,
  } = props;


  return connectDragSource(
    <div
      className={'dashboardWidget'}
    >
      <DynamicWidthWidgetHeaderWrapper>
        <WidgetHeader>{ widgetParams.widget_name }</WidgetHeader>
      </DynamicWidthWidgetHeaderWrapper>
      <DynamicWidthWidgetContent>

      </DynamicWidthWidgetContent>
    </div>
  );
};