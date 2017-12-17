import { combineReducers } from 'redux';

import { reducer as main, State as MainState } from '@src/redux/main';

export interface RootState {
  main: MainState,
}

export const rootReducer = combineReducers<RootState>({
  main,
});