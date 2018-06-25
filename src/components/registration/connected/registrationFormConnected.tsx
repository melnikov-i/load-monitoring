import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { RegistrationForm } from '../components';
import { asyncActionCreators } from '@src/core/redux/registration';

interface StateProps {}

interface DispatchProps {
  sendRegistrationToAPI: (payload: any) => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({});

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = 
  (dispatch: Dispatch) => bindActionCreators({
    sendRegistrationToAPI: asyncActionCreators.sendRegistrationToAPI,
  }, dispatch);

export const RegistrationFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(RegistrationForm)
  );
