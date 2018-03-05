import * as React from 'react';
import * as ReactDnd from 'react-dnd';
import DragLayer = ReactDnd.DragLayer;


export interface DashboardDragLayerPros 
extends React.Props<DashboardDragLayerComponent> {
  isDragging?: boolean,
  currentOffset?: any,
  // item?: any,
}

// const DashboardDragLayerComponent2: 
// React.SFC<DashboardDragLayerPros> = (props) => {
// }

class DashboardDragLayerComponent 
extends React.Component<DashboardDragLayerPros> {
  render() {
    const { isDragging, currentOffset/*, item*/ } = this.props;
    console.log('dragLayer');
    if ( isDragging ) {
      return (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 100,
            transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,

            width: '100px',
            height: '100px',
            backgroundColor: 'green',
          }}
        >
          
        </div>
      );
    } else {
      return null;      
    }
  }
}


//   render() {
//     const { /*item, itemType,*/ isDragging } = this.props;
//     if ( !isDragging ) {
//       return null;
//     }

//     return (
//       <div style={layerStyles}>
//         <div style={getItemStyles(this.props)}>
//           {/*this.renderItem(itemType, item)*/}
//         </div>
//       </div>
//     );    
//   }
// }

let timeUpdate = +new Date();
let currentSourceClientOffset = {x: 0, y: 0};

const trottler = (sourceClientOffset) => {
  if ( +new Date() - timeUpdate > 100 ) {
    if ( sourceClientOffset !== null ) {
      currentSourceClientOffset = sourceClientOffset;
      timeUpdate = +new Date();      
    }
  }
  return currentSourceClientOffset;
}

export const DashboardDragLayer = DragLayer((monitor) => ({
  // item: monitor.getItem(),
  isDragging: monitor.isDragging(),
  // itemType: monitor.getItemType(),
  currentOffset: trottler(monitor.getSourceClientOffset()),
}))(DashboardDragLayerComponent)


////////////

// const getItemStyles = (props) => {
//   const { currentOffset } = props;
//   if (!currentOffset) {
//     return {
//       display: 'none',
//     };
//   }

//   const { x, y } = currentOffset;
//   const transform = `translate(${x}px, ${y}px)`;
//   return {
//     width: '500px',
//     height: '500px',
//     transform: transform,
//     WebkitTransform: transform,
//     backgroundColor: 'rgba(0, 0, 255, .4)',
//   };
// }

// interface layerStylesInterface {
//   position?: any,
//   pointerEvents?: string,
//   zIndex?: number,
//   left?: number,
//   top?: number,
//   backgroundColor?: string,
//   width: string,
//   height: string,
// }

// const layerStyles: layerStylesInterface = {
//   position: 'fixed',
//   pointerEvents: 'none',
//   zIndex: 100,
//   left: 0,
//   top: 0,
//   width: '100px',
//   height: '100px',
// }

  // renderItem(type, item) {
  //   switch ( type ) {
  //     case ItemTypes.WIDGET:
  //       return (
  //         <div>{'aaa'}</div>
  //       );
  //     default: return null;
  //   }
  // }


// type State = {};

// const ItemTypes = {
//   WIDGET: 'WIDGET'
// };


  // currentOffset?: any,
  // itemType?: any,

// import { RootState } from '@src/redux';

// import {
  // DashboardWidgetWrapperInterface,
// } from '@src/interfaces';

// import {
  // DynamicWidthWidget,
  // DynamicWidthWidgetHeaderWrapper,
  // WidgetHeader,
  // DynamicWidthWidgetContent,
// } from '@src/styled';

// import {
  // getWidth,
  // checkPosition
// } from '@src/libs';



// interface DashboardDragLayerTestProps {
//   // element: DashboardWidgetWrapperInterface
//   currentOffset: any,
//   isDragging: boolean,
// }

// const DashboardDragLayerTest: 
// React.SFC<DashboardDragLayerTestProps> = (props) => {
//   const {
//     currentOffset,
//     isDragging,
//     // element,
//   } = props;

//   if ( !currentOffset ) {
//     return null;
//   }

//   if ( !isDragging ) {
//     return null;
//   }

//   return (
//     <div
//       className={'dashboardWidgetWrapper'}
//       style={{
//         width: '200px',
//         height: '200px',
//         position: 'fixed',
//         pointerEvents: 'none',
//         left: 0,
//         top: 0,
//         display: 'block',
//         zIndex: 100,

//         // width: getWidth(element.width),
//         // marginRight: checkPosition(
//         //     Number(element.width),
//         //     element.index
//           // ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
//         // marginBottom: ( element.width === '1' ) ? '20px' : '2%',
//         // visibility: isDragging ? 'hidden' : 'visible',
//         opacity: 1,
//         backgroundColor: 'rgba(0, 0, 255, .4)',
//         cursor: 'move',
//       }}
//     >

//     </div>
//   )
// };

// console.log(DashboardDragLayerTest);
        // <DynamicWidthWidget>
        //   <DynamicWidthWidgetHeaderWrapper>
        //     <WidgetHeader>{ element.widget_name }</WidgetHeader>
        //   </DynamicWidthWidgetHeaderWrapper>
        //   <DynamicWidthWidgetContent>

        //   </DynamicWidthWidgetContent>
        // </DynamicWidthWidget>