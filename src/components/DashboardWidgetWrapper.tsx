import * as React from 'react';

import {
  DashboardWidgetWrapperInterface,
  WidgetInterface,
} from '@src/interfaces';

import DashboardWidgetConnected from 
'@src/connected/DashboardWidgetConnected.usage';

import {
  getWidth,
  checkPosition
} from '@src/libs';

interface CollectType {
  connectDropTarget: any,
}

interface DashboardWidgetWrapperProps {
  element: DashboardWidgetWrapperInterface
}

type WidgetWrapperProps = DashboardWidgetWrapperProps & CollectType;

export const DashboardWidgetWrapper: 
React.SFC<WidgetWrapperProps> = (props) => {
  const {
    element,
    connectDropTarget
  } = props;

  const widgetParams: WidgetInterface = {
    widget_name: element.widget_name,
    device_id: element.device_id,
  }


  return connectDropTarget(
    <div
      className={'dashboardWidgetWrapper'}
      style={{
        width: getWidth(element.width),
        marginRight: checkPosition(
            Number(element.width),
            element.index
          ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
        marginBottom: ( element.width === '1' ) ? '20px' : '2%',        
      }}
    >
      <DashboardWidgetConnected widgetParams={widgetParams} />
    </div>
  );
};