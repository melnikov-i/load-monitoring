import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import { App } from '@src/components';

import {
  isAuthorizedSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    isAuthorized: boolean,
  }>({
    isAuthorized: isAuthorizedSelector,
  });

export const AppConnected =
  withRouter(connect(mapStateToProps, {})(App));