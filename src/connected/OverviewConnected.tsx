import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
  DroppedMenuButtonClickedType
} from '@src/interfaces';

import {
  OverviewItemsWasRequestedFromAPISelector,
  OverviewItemsCollectionSelector,
  DroppedMenuButtonClickedIdSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    OverviewItemsWasRequestedFromAPI: boolean,
    OverviewItemsCollection: OverviewInterface,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  }>({
    OverviewItemsWasRequestedFromAPI: OverviewItemsWasRequestedFromAPISelector,
    OverviewItemsCollection: OverviewItemsCollectionSelector,
    DroppedMenuButtonClickedId: DroppedMenuButtonClickedIdSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
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
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Overview)
  );