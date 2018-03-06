import * as React from 'react';
import * as ReactDnd from 'react-dnd';

import {
  DashboardWidgetWrapperInterface,
  DashboardInterface
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

export interface DashboardWidgetProps {
  element: DashboardWidgetWrapperInterface
  isDragging?: boolean,
  connectDropTarget?: ReactDnd.ConnectDropTarget,
  connectDragSource?: ReactDnd.ConnectDragSource,
  reorderDashboardCollection:
  (payload: DashboardInterface['dash_data']) => any,
}

export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const {
    element,
    isDragging,
    connectDragSource,
    connectDropTarget,
  } = props;

  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }


  return (
    <div
      className={'dashboardWidgetWrapper'}
      id={element.device_id}
      style={{
        width: getWidth(element.width),
        marginRight: checkPosition(
            Number(element.width), element.index
          ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
        marginBottom: ( element.width === '1' ) 
          ? '20px' : '2%',
        cursor: 'move',
        visibility: isDragging ? 'hidden' : 'visible',
      }}
    >
      {connectDragSource(
        connectDropTarget(
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              backgroundColor: 'tranceparent',
              zIndex: 100,
            }}>
              
            </div>
        )
      )}
      <DynamicWidthWidget>
        <DynamicWidthWidgetHeaderWrapper>
          <WidgetHeader>{ element.widget_name }</WidgetHeader>
        </DynamicWidthWidgetHeaderWrapper>
        <DynamicWidthWidgetContent>

        </DynamicWidthWidgetContent>
      </DynamicWidthWidget>
    </div>
  );
};