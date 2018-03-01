import * as React from 'react';
import * as ReactDnd from 'react-dnd';
import {
  Preview,
} from 'react-dnd-multi-backend';

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
  item?: any,
  connectDropTarget?: ReactDnd.ConnectDropTarget,
  connectDragSource?: ReactDnd.ConnectDragSource,
  connectDragPreview?: ReactDnd.ConnectDragPreview,
}


export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const {
    element,
    isDragging,
    // item,
    connectDragSource,
    connectDropTarget,
  } = props;



  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }

  const generator = (type: string, item: any, style: React.CSSProperties) => {
    if ( type === 'WIDGET' ) {
      const currentStyle: React.CSSProperties = {
        ...style,
        width: '100px',
        height: '100px',
        opacity: 1,
        backgroundColor: 'green',
        zIndex: 1000,
      }
      return (<div style={currentStyle}></div>);
    } else {
      return <div />;
    }
  }
        
  return (
    <div
      className={'dashboardWidgetWrapper'}
      style={{
        width: getWidth(element.width),
        marginRight: checkPosition(
            Number(element.width), element.index
          ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
        marginBottom: ( element.width === '1' ) 
          ? '20px' : '2%',
        visibility: isDragging ? 'hidden' : 'visible',
        // opacity: isDragging ? 1 : 1,
        cursor: 'move',
      }}
    >
      <Preview generator={generator} />
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


// export class DashboardWidget extends React.Component<DashboardWidgetProps> {

//   componentDidMount() {
//     const connectDragPreview: 
//     ReactDnd.DragElementWrapper<ReactDnd.DragPreviewOptions> | undefined =
//       this.props.connectDragPreview;
//     if ( connectDragPreview !== undefined ) {
//       const img = getEmptyImage();
//       img.onload = () => connectDragPreview(img);      
//     }
//   }
  

//   render() {
//     const {
//       element,
//       isDragging,
//       // getItem,
//       connectDragSource,
//       // connectDropTarget,
//       // connectDragPreview
//     } = this.props;

//   if ( !connectDragSource ) return null;

//   // console.log('element:', element);

//     return connectDragSource(
//       <div
//         style={{
//           backgroundColor: '#fff',
//           visibility: isDragging ? 'hidden' : 'visible',
//           borderTop: '2px solid #e7eaec',
//           position: 'absolute',
//           top: '0',
//           left: '0',
//           bottom: '0',
//           right: '0',
//         }}
//       >
//         <DynamicWidthWidgetHeaderWrapper>
//           <WidgetHeader>{ element.widget_name }</WidgetHeader>
//         </DynamicWidthWidgetHeaderWrapper>
//         <DynamicWidthWidgetContent>

//         </DynamicWidthWidgetContent>
//       </div>
//     );    
//   }
// };

// export const DashboardWidget: 
// React.SFC<DashboardWidgetProps> = (props) => {
//   const {
//     element,
//     isDragging,
//     getItem,
//     connectDragSource,
//     connectDropTarget,
//     connectDragPreview
//   } = props;

// console.log('getItem', getItem);
// console.log('element', element);

//   if ( getItem && connectDragPreview && getItem.id === element.index ) {
//     const img = getEmptyImage();
//     img.onload = () => connectDragPreview(img);
//     // img.addEventListener('load', () => connectDragPreview(img));
//     console.log('img:', img);
//   }
  
  
//   if ( !connectDragSource || !connectDropTarget ) {
//     return null;
//   }

//   return connectDragSource(
//     connectDropTarget(
//       <div
//         className={'dashboardWidgetWrapper'}
//         style={{
//           width: getWidth(element.width),
//           marginRight: checkPosition(
//               Number(element.width), element.index
//             ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
//           marginBottom: ( element.width === '1' ) 
//             ? '20px' : '2%',
//           visibility: isDragging ? 'hidden' : 'visible',
//           // opacity: isDragging ? 1 : 1,
//           cursor: 'move',
//         }}
//       >

//       </div>
//     )
//   );
// };


// <DynamicWidthWidget>
// </DynamicWidthWidget>
