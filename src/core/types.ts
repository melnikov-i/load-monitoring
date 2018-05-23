import { Dispatch as ReduxDispatch, Action as ReduxAction } from 'redux';

import { RootState } from '@src/core';

export type Dispatch = ReduxDispatch<ReduxAction<any>, RootState>;