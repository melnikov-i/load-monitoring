import { connect } from 'react-redux';
import { RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { LoginPending } from '../components';

interface StateProps { }

interface DispatchProps { }

interface OwnProps { }

export const LoginPendingConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(null, {})(LoginPending));