import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { DragSource, DropTarget } from 'react-dnd';

import {
  // asyncActionCreators,
  // syncActionCreators,
} from '@src/redux/dashboard';

import { DashboardWidget } from '@src/components';

import {} from '@src/interfaces';

import {} from '@src/selectors';

const ItemTypes = {
  WIDGET: 'WIDGET'
};

const widgetSource = {
  beginDrag: (props) => ({
    id: props.element.index,
    index: props.element.index - 1,
  }),
};

const widgetTarget = {
  hover: (props, monitor, component) => {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if ( dragIndex === hoverIndex ) {
      return;
    }
    
    // console.log('hover-dragIndex,', dragIndex);
    // console.log('hover-hoverIndex,', hoverIndex);
  },
};

const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({}, dispatch);


export const DashboardWidgetConnected = DropTarget(
  ItemTypes.WIDGET, widgetTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
  }))(DragSource(
    ItemTypes.WIDGET, widgetSource, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }))(connect(mapStateToProps, mapDispatchToProps)(DashboardWidget))
  );