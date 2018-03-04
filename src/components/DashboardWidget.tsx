import * as React from 'react';
import * as ReactDnd from 'react-dnd';

// import { getEmptyImage } from 'react-dnd-html5-backend';
// import {
//   Preview,
// } from 'react-dnd-multi-backend';

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

export interface DashboardWidgetProps {
  element: DashboardWidgetWrapperInterface
  isDragging?: boolean,
  connectDropTarget?: ReactDnd.ConnectDropTarget,
  connectDragSource?: ReactDnd.ConnectDragSource,
  getClientOffset?: ReactDnd.ClientOffset,
  // connectDragPreview?: ReactDnd.ConnectDragPreview,
}

// const preview = (clientOffset: ReactDnd.ClientOffset) => {
//   console.log('clientOffset:', clientOffset);
//   const preview: HTMLElement = document.createElement('div');
//   preview.id = 'preview';
//   preview.style.position = 'fixed';
//   preview.style.top = '0';
//   preview.style.left = '0';
//   preview.style.pointerEvents = 'none';
//   preview.style.transform = `translate(${clientOffset.x}px, ${clientOffset.y}px)`;

//   // preview.style.display = 'none';

//   preview.style.width = '300px';
//   preview.style.height = '160px';
//   preview.style.backgroundColor = 'green';

//   const root = document.getElementById('app');
//   if ( root !== null ) root.appendChild(preview);
  
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
  
// }

// preview({x: 100, y: 100});

export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const {
    element,
    isDragging,
    connectDragSource,
    connectDropTarget,
    // getClientOffset
    // connectDragPreview
  } = props;

  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }

  // console.log('DashBoardWidget:', getClientOffset);
  console.log('DashBoardWidget:', isDragging);
  // let lastUpdate = +new Date();
  // let offsetX = 0;
  // let offsetY = 0;
  
  // while ( isDragging ) {
    // if ( +new Date() - lastUpdate > 16 ) {
    //   lastUpdate = +new Date();
      // if ( getClientOffset !== undefined ) {
      //   console.log(getClientOffset);          
      //   if ( offsetX !== getClientOffset.x || offsetY !== getClientOffset.y ) {
        // }
      // }
    // }
  // }
  // const preview = document.getElementById('preview');

  // if ( preview !== null ) {
  //   if ( isDragging && getClientOffset !== undefined ) {
  //     if ( getClientOffset.x !== null && getClientOffset.y !== null ) {
  //       preview.style.display = 'block';
  //       preview.style.transform = `translate(${getClientOffset.x} ${getClientOffset.y})`;        
  //     }
  //     // getClientOffset ? preview(getClientOffset) : null;    
  //   } else {
  //     preview.style.display = 'none';
  //   }
  // }
    

  // if ( isDragging && connectDragPreview !== undefined ) {
  //   const imgLoad = new Image();
  //   imgLoad.onload = () => connectDragPreview(img);
  //   console.log('img:', img);
  // }

  // console.log('getClientOffset', getClientOffset);

  


      // { isDragging ? img : null}
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