import * as React from 'react';

import {
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import {
  DynamicWidthWidget,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
  DynamicWidthWidgetContent,
} from '@src/styled';

import {
  getWidth,
  checkPosition
} from '@src/libs';

interface CollectType {
  idDragging: boolean,
  connectDropTarget: any,
  connectDragSource: any,
}

interface DashboardWidgetWrapperProps {
  element: DashboardWidgetWrapperInterface
}

type WidgetWrapperProps = DashboardWidgetWrapperProps & CollectType;

export const DashboardWidget: 
React.SFC<WidgetWrapperProps> = (props) => {
  const {
    element,
    idDragging,
    connectDragSource,
    connectDropTarget,
  } = props;


  return connectDragSource(
    connectDropTarget(
      <div
        className={'dashboardWidgetWrapper'}
        style={{
          width: getWidth(element.width),
          marginRight: checkPosition(
              Number(element.width),
              element.index
            ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
          marginBottom: ( element.width === '1' ) ? '20px' : '2%',
          opacity: idDragging ? 0 : 1,
        }}
      >
        <DynamicWidthWidget>
          <DynamicWidthWidgetHeaderWrapper>
            <WidgetHeader>{ element.widget_name }</WidgetHeader>
          </DynamicWidthWidgetHeaderWrapper>
          <DynamicWidthWidgetContent>

          </DynamicWidthWidgetContent>
        </DynamicWidthWidget>
      </div>
    )
  );
};