import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam, } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { Recovery } from '../components';
// import { syncActionCreators } from '@src/core/redux/recovery';

interface StateProps {
  // recoveryView: string,
}

interface DispatchProps {
  // changeRecoveryView: (payload: string) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    // registrationView: (state: RootState) => state.registration.registrationView,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) =>
    bindActionCreators({
      // changeRegistrationView: syncActionCreators.changeRegistrationView,
    }, dispatch);

export const RecoveryConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(Recovery)
);