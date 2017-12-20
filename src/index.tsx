import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { AppContainer } from '@src/containers';

const Root: JSX.Element = (
  <Provider store={ store }>
    <AppContainer />
  </Provider>
);

render(
  Root, document.getElementById('app')
);