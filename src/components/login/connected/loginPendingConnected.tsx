import { connect } from 'react-redux';
import { RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { LoginPending } from '../components';

export const LoginPendingConnected = withRouter(
  connect<{}, {}, {}, RootState>(null, {})(LoginPending));