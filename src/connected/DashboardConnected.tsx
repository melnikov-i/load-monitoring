import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Dashboard } from '@src/components';

import {
  asyncActionCreators,
} from '@src/redux/dashboard';

import {
  DashboardInterface,
  ElementsOfDashboardCollectionInterface
} from '@src/interfaces';

interface StateProps {
  DashboardStateKey: string,
  ElementsOfDashboardCollection: ElementsOfDashboardCollectionInterface,
  DashboardStaticModel: DashboardInterface,
  MainHeaderButtonWasClicked: boolean,
}

interface DispatchProps {
  makeDashboardRequestFromAPI:
    (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
}

interface OwnProps {
  id: DashboardInterface['dash_id']['dashboard_id'],
}


const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> = 
  createStructuredSelector<RootState, StateProps>({
    /* Ключ состояния компонента, используемый для выбора Вида */
    DashboardStateKey:
      (state: RootState) => state.dashboard.DashboardStateKey,
    /* имя узла, к которому привязан action makeSeriesDataRequestFromAPI */
    ElementsOfDashboardCollection:
      (state: RootState) => state.dashboard.ElementsOfDashboardCollection,
    /* Модель дашборда для статического отображения */
    DashboardStaticModel:
      (state: RootState) => state.dashboard.DashboardStaticModel,
    /* ... */
    MainHeaderButtonWasClicked:
      (state: RootState) => state.mainHead.MainHeaderButtonWasClicked,
  });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = 
  ( dispatch: Dispatch ) => bindActionCreators({
    makeDashboardRequestFromAPI: 
      asyncActionCreators.makeDashboardRequestFromAPI,
  }, dispatch);

export const DashboardConnected = connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps, mapDispatchToProps)(Dashboard);