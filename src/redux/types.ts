import { Dispatch as ReduxDispatch } from 'redux';

import { RootState } from '@src/redux';

export type Dispatch = ReduxDispatch<RootState>;