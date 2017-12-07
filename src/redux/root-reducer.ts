import { combineReducers } from 'redux';

import { reducer as common, State as CommonState } from '@src/redux/common';
import { reducer as spinner, State as SpinnerState } from '@src/redux/spinner';
import { reducer as main, State as MainState } from '@src/redux/main';

export interface RootState {
  common: CommonState,
  spinner: SpinnerState,
  main: MainState,
}

export const rootReducer = combineReducers<RootState>({
  common,
  spinner,
  main,
});