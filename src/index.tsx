import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from './store';
import { AppContainer } from '@src/containers';

const Root: JSX.Element = (
  <Provider store={ store }>
    <Router hashType={'slash'} basename={'/'}>
      <AppContainer />
    </Router>
  </Provider>
);

render(
  Root, document.getElementById('app')
);
