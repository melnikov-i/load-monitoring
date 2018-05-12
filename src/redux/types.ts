import { Dispatch as ReduxDispatch, Action as ReduxAction } from 'redux';

// import { RootState } from '@src/redux';

export type Dispatch = ReduxDispatch<ReduxAction<any>>;