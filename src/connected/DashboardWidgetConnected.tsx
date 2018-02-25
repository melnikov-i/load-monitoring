import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { DragSource } from 'react-dnd';

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
  beginDrag: (props) => ({}),
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }  
};

const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({}, dispatch);

export const DashboardWidgetConnected = DragSource(
  ItemTypes.WIDGET, widgetSource, collect)(
    connect(mapStateToProps, mapDispatchToProps)(DashboardWidget)
  );