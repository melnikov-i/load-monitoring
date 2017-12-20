import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/redux';

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
  connect(mapStateToProps, {})(App);