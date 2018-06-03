import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';
import { withRouter } from 'react-router-dom';

import { Registration } from '../components';
import { syncActionCreators } from '../redux';

interface StateProps {
  registrationView: string,
}

interface DispatchProps {
  changeRegistrationView: (payload: string) => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    registrationView: (state: RootState) => state.registration.registrationView,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) =>
  bindActionCreators({
      changeRegistrationView: syncActionCreators.changeRegistrationView,
  }, dispatch);

export const RegistrationConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(Registration)
  );
