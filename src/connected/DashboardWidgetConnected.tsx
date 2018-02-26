import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { findDOMNode } from 'react-dom';
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
    
    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    // props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
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
      isDragging: monitor.isDragging(),
    }))(connect(mapStateToProps, mapDispatchToProps)(DashboardWidget))
  );