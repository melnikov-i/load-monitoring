import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  asyncActionCreators,
} from '@src/redux/dashboard';

import { Dashboard } from '@src/components';

import {
  DashboardInterface,
  ElementsOfDashboardCollectionInterface
} from '@src/interfaces';

import {
  DashboardStateKeySelector,
  ElementsOfDashboardCollectionSelector,
  DashboardStaticModelSelector,
  MainHeaderButtonWasClickedSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState, {
    DashboardStateKey: string,
    ElementsOfDashboardCollection: ElementsOfDashboardCollectionInterface,
    DashboardStaticModel: DashboardInterface,
    MainHeaderButtonWasClicked: boolean,
  }>({
    DashboardStateKey: DashboardStateKeySelector,
    ElementsOfDashboardCollection:
      ElementsOfDashboardCollectionSelector,
    DashboardStaticModel: DashboardStaticModelSelector,
    MainHeaderButtonWasClicked: MainHeaderButtonWasClickedSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDashboardRequestFromAPI: 
    asyncActionCreators.makeDashboardRequestFromAPI,
}, dispatch);

export const DashboardConnected = 
  connect(mapStateToProps, mapDispatchToProps)(Dashboard);