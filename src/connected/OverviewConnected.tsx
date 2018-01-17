import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import {
  asyncActionCreators,
} from '@src/redux/overview';

import { Overview } from '@src/components';

import {
  OverviewInterface
} from '@src/interfaces';

import {
  OverviewItemsWasRequestedFromAPISelector,
  OverviewItemsCollectionSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    OverviewItemsWasRequestedFromAPI: boolean,
    OverviewItemsCollection: OverviewInterface,
  }>({
    OverviewItemsWasRequestedFromAPI: OverviewItemsWasRequestedFromAPISelector,
    OverviewItemsCollection: OverviewItemsCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeOverviewItemsRequestFromAPI:
    asyncActionCreators.makeOverviewItemsRequestFromAPI
}, dispatch);

export const OverviewConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Overview)
  );