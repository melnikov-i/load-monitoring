import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from './store';
import AppConnected from '@src/usage/AppUsage';

const Root: JSX.Element = (
  <Provider store={ store }>
    <Router hashType={'slash'} basename={'/'}>
      <AppConnected />
    </Router>
  </Provider>
);

render(
  Root, document.getElementById('app')
);
