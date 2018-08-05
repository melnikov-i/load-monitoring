import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageLayout } from '../components';
import { asyncActionCreators } from '@src/core/redux/login';

interface StateProps {
  isSubmenuActiveOnSmallScreen: boolean,
}

interface DispatchProps {
  sendLogoutToApi: () => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isSubmenuActiveOnSmallScreen: (state: RootState) => 
      state.page.isSubmenuActiveOnSmallScreen
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    sendLogoutToApi: asyncActionCreators.sendLogoutToApi,
  }, dispatch);

export const PageLayoutConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(PageLayout));
