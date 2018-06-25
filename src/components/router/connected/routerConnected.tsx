import { connect, MapStateToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { Router } from '../components';

interface StateProps {
  isAuthorized: boolean,
}

const MapStateToProps:
MapStateToPropsParam<StateProps, {}, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isAuthorized: (state: RootState) => state.login.isAuthorized,
  });

export const RouterConnected = withRouter(
  connect<StateProps, {}, {}, RootState>(
    MapStateToProps, {})(Router));