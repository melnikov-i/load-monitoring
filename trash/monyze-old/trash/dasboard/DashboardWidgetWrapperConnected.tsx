import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { DropTarget } from 'react-dnd';

import { DashboardWidgetWrapper } from '@src/components';

const ItemTypes = {
  WIDGET: 'WIDGET',
};

const widgetTarget = {
  drop: (props) => ({}),
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
};

const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({}, dispatch);

export const DashboardWidgetWrapperConnected = DropTarget(
  ItemTypes.WIDGET, widgetTarget, collect)(
    connect(mapStateToProps, mapDispatchToProps)(DashboardWidgetWrapper)
  );