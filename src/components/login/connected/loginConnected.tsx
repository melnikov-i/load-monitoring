import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam, } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { Login } from '../components';
// import { syncActionCreators } from '@src/core/redux/login';

interface StateProps {
  loginView: string,
}

interface DispatchProps {
  // changeLoginView: (payload: string) => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    loginView: (state: RootState) => state.login.loginView,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) =>
    bindActionCreators({
      // changeLoginView: syncActionCreators.changeLoginValue,
    }, dispatch);

export const LoginConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(Login)
);
