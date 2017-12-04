import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import store from './store';
import { App } from '@src/containers';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-size: 0;
    border: 0;
    font-family: 'Open Sans', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    min-width: 700px;
    height: 100%;
  }
`;

const Root: JSX.Element = (
  <Provider store={ store }>
    <Router hashType={'slash'} basename={'/'}>
      <App />      
    </Router>
  </Provider>
);

render(
  Root, document.getElementById('app')
);