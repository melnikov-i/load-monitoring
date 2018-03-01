import * as React from 'react';

import {
  Preview,
} from 'react-dnd-multi-backend';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface
} from '@src/interfaces';

import {
  // DynamicWidthWidget,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
  DynamicWidthWidgetContent,
} from '@src/styled';

import DashboardWidgetConnected from 
  '@src/usage/DashboardWidgetUsage';

interface DashboardGridProps {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}

export const DashboardGrid: React.SFC<DashboardGridProps> = (props) => {
  const {
    SelectedCheckbox,
    DashboardCollection,
  } = props;

  const generator = (type: string, item: any, style: React.CSSProperties) => {
    if ( type === 'WIDGET' ) {
      const currentStyle: React.CSSProperties = {
        ...style,
        backgroundColor: 'green',
        zIndex: 1000,
      };

      console.log('item:', item);
      return (
        <div style={currentStyle}>
          <DynamicWidthWidgetHeaderWrapper>
            <WidgetHeader>{ 
              DashboardCollection.dash_data[item.index].widget_name 
            }</WidgetHeader>
          </DynamicWidthWidgetHeaderWrapper>
          <DynamicWidthWidgetContent>

          </DynamicWidthWidgetContent>
        </div>
      );
    } else {
      return <div />;
    }
  }


  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: '20px 15px 0',
      }}
    >      
      <Preview generator={generator} />
      {DashboardCollection.dash_data.map((e, i) => {
        const element: DashboardWidgetWrapperInterface = {
          index: i + 1,
          width: SelectedCheckbox,
          widget_name: e.widget_name,
          device_id: e.device_id,
        }
        return (
          <DashboardWidgetConnected
            key={i}
            element={element} 
          />
        );
      })}
    </div>
  );
};