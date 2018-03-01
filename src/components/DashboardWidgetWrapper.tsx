import * as React from 'react';
import * as ReactDnd from 'react-dnd';

import {
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import DashboardWidgetConnected from 
  '@src/usage/DashboardWidgetUsage';

import {
  getWidth,
  checkPosition
} from '@src/libs';

export interface DashboardWidgetWrapperProps {
  element: DashboardWidgetWrapperInterface
  connectDropTarget?: ReactDnd.ConnectDropTarget,
}

export class DashboardWidgetWrapper 
extends React.Component<DashboardWidgetWrapperProps> {
  render() {
    const { element, connectDropTarget } = this.props;

    if ( !connectDropTarget ) return null;

    return (
      connectDropTarget(
        <div
          className={'dashboardWidgetWrapper'}
          style={{
            width: getWidth(element.width),
            marginRight: checkPosition(
                Number(element.width), element.index
              ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
            marginBottom: ( element.width === '1' ) 
              ? '20px' : '2%',
            cursor: 'move',
          }}
        >
          <DashboardWidgetConnected element={element} />
        </div>
      )
    );
  }
}