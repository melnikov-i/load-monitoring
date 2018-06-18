import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { Authenticate } from '../components';

interface StateProps {
  // isAuthorized: boolean,
}

interface DispatchProps {}

interface OwnProps {}

const MapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    // isAuthorized: (state: RootState) => state.login.isAuthorized,
  });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch): DispatchProps => bindActionCreators({}, dispatch);

export const AuthenticateConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    MapStateToProps, mapDispatchToProps)(Authenticate));