import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { DashboardGridSettings } from '@src/components';

import { 
  syncActionCreators,
  asyncActionCreators
} from '@src/redux/dashboard';

import { 
  syncActionCreators as mainHeadActionCreators
} from '@src/redux/mainHead';

import {
  DashboardInterface,
} from '@src/interfaces';

interface StateProps {
  DashboardDragModel: DashboardInterface,
}

interface DispatchProps {
  changeSelectedCheckbox: (payload: string) => any,
  mainHeaderButtonSwitch: () => any,
  sendChangedDashboardToAPI: (payload: DashboardInterface) => any,
}

interface OwnProps {}

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    DashboardDragModel:
      ( state: RootState ) => state.dashboard.DashboardDragModel,
  });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    changeSelectedCheckbox: syncActionCreators.changeSelectedCheckbox,
    mainHeaderButtonSwitch: mainHeadActionCreators.mainHeaderButtonSwitch,
    sendChangedDashboardToAPI: asyncActionCreators.sendChangedDashboardToAPI,
  }, dispatch);

export const DashboardGridSettingsConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(DashboardGridSettings);