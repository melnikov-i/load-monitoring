import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';

import DragSource = ReactDnd.DragSource;
import DropTarget = ReactDnd.DropTarget;

import {
  DashboardWidget,
  DashboardWidgetProps,
} from '@src/components';

import {
  syncActionCreators
} from '@src/redux/dashboard';

const ItemTypes = {
  WIDGET: 'WIDGET'
};

let source = -1;
// let target = -1;

const widgetSource: 
ReactDnd.DragSourceSpec<DashboardWidgetProps> = {
  beginDrag: (props: DashboardWidgetProps) => {
    if ( source === -1 ) {
      console.log('begin');
      source = props.element.index - 1;
    }
    return {
      width: props.element.width,
      widget_name: props.element.widget_name,
      device_id: props.element.device_id,
      index: props.element.index,      
    };
  },
  // endDrag: (props: DashboardWidgetProps) => {
  //   target = -1;
  //   return {};
  // }
};


const widgetTarget:
ReactDnd.DropTargetSpec<DashboardWidgetProps> = {
  hover: (
    props: DashboardWidgetProps,
    monitor: ReactDnd.DropTargetMonitor,
    component: React.Component<DashboardWidgetProps>) => {
      if ( source !== -1 ) {
        const items = {
          source: source,
          target: props.element.index - 1,
        }
        props.reorderDashboardCollection(items);
        source = -1;
      }
    },
};

let lastUpdate = +new Date();

const getCustomClientOffset = (offset: ReactDnd.ClientOffset) => {
  if ( +new Date() - lastUpdate > 16 ) {
    lastUpdate = +new Date();
    return offset
  }
  return undefined;
};

const dragSourceCollect = (
  connect: ReactDnd.DragSourceConnector,
  monitor: ReactDnd.DragSourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    getClientOffset: getCustomClientOffset(monitor.getClientOffset()),
    isDragging: monitor.isDragging(),
  });

const dropTargetCollect = (
  connect: ReactDnd.DropTargetConnector,
  monitor: ReactDnd.DropTargetMonitor) => ({
    connectDropTarget: connect.dropTarget(),
  });

const mapStateToProps = createStructuredSelector<RootState, {

}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  reorderDashboardCollection: 
    syncActionCreators.reorderDashboardCollection,
}, dispatch);


export const DashboardWidgetConnected = connect(
  mapStateToProps, mapDispatchToProps)(DropTarget(
    ItemTypes.WIDGET, widgetTarget, dropTargetCollect)(
      DragSource(
        ItemTypes.WIDGET, widgetSource, dragSourceCollect)(
          DashboardWidget)
        )
      );