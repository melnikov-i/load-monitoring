import { connect } from 'react-redux';
import { RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { NotFound } from '../components';

export const NotFoundConnected = withRouter(
  connect<{}, {}, {}, RootState>(null, {})(NotFound));