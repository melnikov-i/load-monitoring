import { Dispatch as ReduxDispatch, Action as ReduxAction } from 'redux';

import { RootState } from './';

export type Dispatch = ReduxDispatch<ReduxAction<any>, RootState>;