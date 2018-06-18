import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from '@src/core/store';
import Authenticate from '@src/components/authenticate';

const Root: JSX.Element = (
  <Provider store={ store }>
    <Router hashType={'slash'} basename={'/'}>
      <Authenticate />
    </Router>
  </Provider>
);

render(
  Root, document.getElementById('app')
);
