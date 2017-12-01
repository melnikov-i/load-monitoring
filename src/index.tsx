import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import store from './store';
import { App } from '@src/containers';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-size: 0;
    border: 0;
  }
`;

const Root: JSX.Element = (
  <Provider store={ store }>
    <App />
  </Provider>
);

render(
  Root, document.getElementById('app')
);