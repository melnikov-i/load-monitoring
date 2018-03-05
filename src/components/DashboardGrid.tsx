import * as React from 'react';
// import * as ReactDnd from 'react-dnd';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import { DashboardDragLayer } from '@src/components';

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


  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: '20px 15px 0',
      }}
    >
      <DashboardDragLayer />
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

//////////////////

// import {
//   getPreviewWidth,
// } from '@src/libs';

// import {
//   Preview,
// } from 'react-dnd-multi-backend';

// import {
  // DynamicWidthWidget,
  // DynamicWidthWidgetHeaderWrapper,
  // WidgetHeader,
  // DynamicWidthWidgetContent,
  // MENU_LAYOUT_BIG_WIDTH
// } from '@src/styled';


// const preview = (clientOffset: ReactDnd.ClientOffset) => {
//   console.log('clientOffset:', clientOffset);
//   const preview: HTMLElement = document.createElement('div');
//   preview.id = 'preview';
//   preview.style.position = 'fixed';
//   preview.style.top = '0';
//   preview.style.left = '0';
//   preview.style.pointerEvents = 'none';
//   preview.style.zIndex = '100';
//   preview.style.opacity = '0.5';
//   preview.style.display = 'none';
  
  // preview.style.transform = `translate(${clientOffset.x}px, ${clientOffset.y}px)`;


  // preview.style.width = '300px';
  // preview.style.height = '160px';
  // preview.style.backgroundColor = 'green';

  // const root = document.getElementById('app');
  // if ( root !== null ) root.appendChild(preview);
  
  // const preview: HTMLElement | null = document.getElementById('preview');
  
  // if ( preview !== null ) {
  //   if ( isDragging ) {
  //     preview.style.display = 'block';
  //     preview.style.zIndex = '100';
      
  //     const { getClientOffset } = props;
  //     if ( getClientOffset !== undefined ) {
  //       const { x, y } = getClientOffset;
  //       preview.style.transform = `translate(${x}px, ${y}px)`;
  //     }
  //   } else {
  //     preview.style.display = 'none';
  //   }
  // }
  
// };

  // preview({x: 0, y: 0});

  // console.log('DashboardGrid was updated');
  // let checkingTime = +new Date();
  // let tmpStyle: React.CSSProperties | undefined;

  
  // const throttle = (restartTime) => {
  //   if ( (restartTime - checkingTime) >= 16 ) {
  //     checkingTime = restartTime;
  //     console.log('startDraggingTime:', checkingTime);
  //     return true;
  //   }
  //   return false;
  // }
  
  // const generator = (type: string, item: any, style: React.CSSProperties) => {
  //   console.log('style:', style);
  //   return <div />
  // }



  // const generator = (type: string, item: any, style: React.CSSProperties) => {
  //   if ( type === 'WIDGET' ) {
  //     const restartingTime = +new Date();
      
  //     if ( tmpStyle === undefined ) {
  //       tmpStyle = style;
  //     }
      
  //     let currentStyle: React.CSSProperties = {};
  //     if ( throttle( restartingTime ) ) {
  //       console.log('restartingTime', restartingTime);
  //       currentStyle = style;
  //       tmpStyle = style;
  //     } else {
  //       currentStyle = tmpStyle;
  //     }

  //     // const tmpStyle: React.CSSProperties = style;
      
  //     // const currentStyle = (throttle(restartingTime))
  //     //   ? style : tmpStyle;

  //     // console.log('tmpStyle', tmpStyle);

  //       // ...style,
  //     const funalStyle: React.CSSProperties = {
  //       ...currentStyle,
  //       width: `calc(
  //         (100% - ${MENU_LAYOUT_BIG_WIDTH} - 30px) 
  //         * ${getPreviewWidth(SelectedCheckbox)})`,
  //       };

  //     return (
  //       <div className={'dashboardWidgetPreview'} style={funalStyle}>
  //         <DynamicWidthWidget>
  //           <DynamicWidthWidgetHeaderWrapper>
  //             <WidgetHeader>{ 
  //               DashboardCollection.dash_data[item.index].widget_name 
  //             }</WidgetHeader>
  //           </DynamicWidthWidgetHeaderWrapper>
  //           <DynamicWidthWidgetContent>

  //           </DynamicWidthWidgetContent>
  //         </DynamicWidthWidget>
  //       </div>          
  //     );
  //   }
  //   return <div />;
  // }
  

      // <Preview generator={generator} />