// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { Dispatch, RootState } from '@src/redux';
import { DragLayer } from 'react-dnd';

import {
  // asyncActionCreators,
  // syncActionCreators,
} from '@src/redux/dashboard';

import { DashboardDragLayer } from '@src/components';

import {} from '@src/interfaces';

import {} from '@src/selectors';

// const ItemTypes = {
//   WIDGET: 'WIDGET'
// };

// const widgetSource = {
//   beginDrag: (props) => ({
//     id: props.element.index,
//     index: props.element.index - 1,
//   }),
// };

// const widgetTarget = {
//   hover: (props, monitor, component) => {
//     const dragIndex = monitor.getItem().index;
//     const hoverIndex = props.index;

//     if ( dragIndex === hoverIndex ) {
//       return;
//     }
    
//   },
// };

// const mapStateToProps = createStructuredSelector<RootState, {}>({});

// const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({}, dispatch);


export const DashboardDragLayerConnected = DragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }))(DashboardDragLayer);

// export default DragLayer((monitor) => ({
//     currentOffset: monitor.getSourceClientOffset(),
//     isDragging: monitor.isDragging(),
//   }))(DashBoardDragLayerTest)

// DragLayer((monitor) => ({
    // currentOffset: monitor.getSourceClientOffset(),
  //   isDragging: monitor.isDragging(),
  // }))(