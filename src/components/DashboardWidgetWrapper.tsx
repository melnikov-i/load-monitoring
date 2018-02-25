import * as React from 'react';

import {
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import {
  DynamicWidthWidgetWrapper,
} from '@src/styled';

interface DashboardWidgetWrapperProps {
  element: DashboardWidgetWrapperInterface
}

export const DashboardWidgetWrapper: 
React.SFC<DashboardWidgetWrapperProps> = (props) => {
  const { element } = props;

  return (
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

      </DynamicWidthWidgetWrapper>      
    </div>
  );
};