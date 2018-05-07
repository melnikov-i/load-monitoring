import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import {
  asyncActionCreators,
} from '@src/redux/overview';
import { 
  syncActionCreators as mainActionCreators 
} from '@src/redux/main';

import { Overview } from '@src/components';

import {
  OverviewInterface,
  DroppedMenuButtonClickedType,
  OverviewEventsTableInterface,
} from '@src/interfaces';

interface StateProps {
  OverviewItemsWasRequestedFromAPI: boolean,
  OverviewItemsCollection: OverviewInterface,
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
}

interface DispatchProps {
  makeOverviewItemsRequestFromAPI: () => any,
  remakeOverviewItemsRequestFromAPI: () => any,
  makeOverviewDeleteItemsRequestFromAPI:
  (payload: OverviewEventsTableInterface['id']) => any,
  changeDroppedMenuClickedId:
  (payload: DroppedMenuButtonClickedType) => any,
}

interface OwnProps {}

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    OverviewItemsWasRequestedFromAPI:
      ( state: RootState ) => state.overview.OverviewItemsWasRequestedFromAPI,
    OverviewItemsCollection:
      ( state: RootState ) => state.overview.OverviewItemsCollection,
    DroppedMenuButtonClickedId:
      ( state: RootState ) => state.main.DroppedMenuButtonClickedId,
  });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> =
(dispatch: Dispatch) => bindActionCreators({
  makeOverviewItemsRequestFromAPI:
    asyncActionCreators.makeOverviewItemsRequestFromAPI,
  remakeOverviewItemsRequestFromAPI:
    asyncActionCreators.remakeOverviewItemsRequestFromAPI,
  makeOverviewDeleteItemsRequestFromAPI:
    asyncActionCreators.makeOverviewDeleteItemsRequestFromAPI,
  changeDroppedMenuClickedId:
    mainActionCreators.changeDroppedMenuClickedId,
}, dispatch);

export const OverviewConnected = 
  withRouter(connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(Overview)
  );