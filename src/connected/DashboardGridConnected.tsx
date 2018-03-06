import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';
import DragDropContext = ReactDnd.DragDropContext;

import MultiBackend, {
  Backends,
  createTransition,
  // Preview,
  TouchTransition,
  // HTML5DragTransition,
} from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

const CustomBakcends: Backends = {
  backends: [
    {
      backend: HTML5Backend,
      preview: true,
    },
    {
      backend: TouchBackend({ enableMouseEvents: false }),
      preview: true,
      transition: createTransition('touchstart', (event: TouchEvent) => {
        return event.touches !== null;
      }),
    },
    {
      backend: TouchBackend({}),
      transition: TouchTransition,
      preview: true,
    }
  ],
}


import { DashboardGrid } from '@src/components';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  SelectedCheckboxSelector,
  DashboardCollectionSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}>({
  SelectedCheckbox: SelectedCheckboxSelector,
  DashboardCollection: DashboardCollectionSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
}, dispatch);

export const DashboardGridConnected = DragDropContext(
  MultiBackend(CustomBakcends))(connect(
    mapStateToProps, mapDispatchToProps)(DashboardGrid));