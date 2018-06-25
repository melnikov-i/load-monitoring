import { bindActionCreators } from 'redux';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { LoginForm } from '../components';
import { asyncActionCreators } from '@src/core/redux/login';
import { ILoginRequestPayload } from '@src/core/interfaces';

interface DispatchProps {
  sendUserCredentialToAPI: (payload: ILoginRequestPayload) => any,
}

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, {}> =
  (dispatch: Dispatch) => bindActionCreators({
    sendUserCredentialToAPI: asyncActionCreators.sendUserCredentialToAPI,
  }, dispatch);

export const LoginFormConnected = withRouter(
  connect<{}, DispatchProps, {}, RootState>(
    null, mapDispatchToProps)(LoginForm)
);
