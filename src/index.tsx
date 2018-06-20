import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '@src/core/store';
import Router from '@src/components/router';

const Root: JSX.Element = (
  <Provider store={ store }>
    <HashRouter hashType={'slash'} basename={'/'}>
      <Router />
    </HashRouter>
  </Provider>
);

render(
  Root, document.getElementById('app')
);
