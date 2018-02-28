import * as React from 'react';
import * as ReactDnd from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import {
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import {
  // DynamicWidthWidget,
  // DynamicWidthWidgetHeaderWrapper,
  // WidgetHeader,
  // DynamicWidthWidgetContent,
} from '@src/styled';

import {
  getWidth,
  checkPosition
} from '@src/libs';

export interface DashboardWidgetProps {
  element: DashboardWidgetWrapperInterface
  isDragging?: boolean,
  getItem?: any,
  connectDropTarget?: ReactDnd.ConnectDropTarget,
  connectDragSource?: ReactDnd.ConnectDragSource,
  connectDragPreview?: ReactDnd.ConnectDragPreview,
}


export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const {
    element,
    isDragging,
    getItem,
    connectDragSource,
    connectDropTarget,
    connectDragPreview
  } = props;

console.log('getItem', getItem);
console.log('element', element);

  if ( getItem && connectDragPreview && getItem.id === element.index ) {
    const img = getEmptyImage();
    img.onload = () => connectDragPreview(img);
    // img.addEventListener('load', () => connectDragPreview(img));
    console.log('img:', img);
  }
  
  
  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }

  return connectDragSource(
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
          visibility: isDragging ? 'hidden' : 'visible',
          // opacity: isDragging ? 1 : 1,
          cursor: 'move',
        }}
      >

      </div>
    )
  );
};


// <DynamicWidthWidget>
//   <DynamicWidthWidgetHeaderWrapper>
//     <WidgetHeader>{ element.widget_name }</WidgetHeader>
//   </DynamicWidthWidgetHeaderWrapper>
//   <DynamicWidthWidgetContent>

//   </DynamicWidthWidgetContent>
// </DynamicWidthWidget>



// export class DashboardWidget1 extends React.Component<DashboardWidgetProps> {
//   componentDidMount() {
//     console.log('didMount');
//     const img = getEmptyImage();
//     const connectDragPreview = 
//       this.props.connectDragPreview ? this.props.connectDragPreview : null;
//     if ( connectDragPreview !== null ) {
//       img.onload = () => connectDragPreview(img);
//       console.log('img:', img);
//     }
//   }

//   render() {
//     const {
//       element,
//       isDragging,
//       connectDragSource,
//       connectDropTarget,
//     } = this.props;

//     if ( !connectDragSource || !connectDropTarget ) {
//       return null;
//     }

//     return connectDragSource(
//       connectDropTarget(
//         <div
//           className={'dashboardWidgetWrapper'}
//           style={{
//             width: getWidth(element.width),
//             marginRight: checkPosition(
//                 Number(element.width),
//                 element.index
//               ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
//             marginBottom: ( element.width === '1' ) 
//               ? '20px' : '2%',
//             visibility: isDragging ? 'hidden' : 'visible',
//             // opacity: isDragging ? 1 : 1,
//             cursor: 'move',
//           }}
//         >

//         </div>
//       )
//     );
//   }
// }


