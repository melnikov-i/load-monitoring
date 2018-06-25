import { connect, MapStateToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { Login } from '../components';

interface StateProps {
  loginView: string,
}

const mapStateToProps:
  MapStateToPropsParam<StateProps, {}, RootState> =
  createStructuredSelector<RootState, StateProps>({
    loginView: (state: RootState) => state.login.loginView,
  });

export const LoginConnected = withRouter(
  connect<StateProps, {}, {}, RootState>(
    mapStateToProps, {})(Login)
);
