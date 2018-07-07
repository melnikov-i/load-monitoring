import { connect } from 'react-redux';
import { RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageRouter } from '../components';

export const PageRouterConnected = withRouter(
  connect<null, null, null, RootState>(null, null)(PageRouter));