import * as React from 'react';

import {
  Preview,
} from 'react-dnd-multi-backend';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';


import {
  DynamicWidthWidget,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
  DynamicWidthWidgetContent,
  MENU_LAYOUT_BIG_WIDTH
} from '@src/styled';

import DashboardWidgetConnected from 
  '@src/usage/DashboardWidgetUsage';

import {
  getPreviewWidth,
} from '@src/libs';

interface DashboardGridProps {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}

export const DashboardGrid: React.SFC<DashboardGridProps> = (props) => {
  const {
    SelectedCheckbox,
    DashboardCollection,
  } = props;

  console.log('DashboardGrid was updated');
  let checkingTime = +new Date();
  let tmpStyle: React.CSSProperties | undefined;

  
  const throttle = (restartTime) => {
    if ( (restartTime - checkingTime) >= 16 ) {
      checkingTime = restartTime;
      console.log('startDraggingTime:', checkingTime);
      return true;
    }
    return false;
  }
  
  const generator = (type: string, item: any, style: React.CSSProperties) => {
    if ( type === 'WIDGET' ) {
      const restartingTime = +new Date();
      
      if ( tmpStyle === undefined ) {
        tmpStyle = style;
      }
      
      let currentStyle: React.CSSProperties = {};
      if ( throttle( restartingTime ) ) {
        console.log('restartingTime', restartingTime);
        currentStyle = style;
        tmpStyle = style;
      } else {
        currentStyle = tmpStyle;
      }

      // const tmpStyle: React.CSSProperties = style;
      
      // const currentStyle = (throttle(restartingTime))
      //   ? style : tmpStyle;

      // console.log('tmpStyle', tmpStyle);

        // ...style,
      const funalStyle: React.CSSProperties = {
        ...currentStyle,
        width: `calc(
          (100% - ${MENU_LAYOUT_BIG_WIDTH} - 30px) 
          * ${getPreviewWidth(SelectedCheckbox)})`,
        };

      return (
        <div className={'dashboardWidgetPreview'} style={funalStyle}>
          <DynamicWidthWidget>
            <DynamicWidthWidgetHeaderWrapper>
              <WidgetHeader>{ 
                DashboardCollection.dash_data[item.index].widget_name 
              }</WidgetHeader>
            </DynamicWidthWidgetHeaderWrapper>
            <DynamicWidthWidgetContent>

            </DynamicWidthWidgetContent>
          </DynamicWidthWidget>
        </div>          
      );
    }
    return <div />;
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