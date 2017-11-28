import { combineReducers } from 'redux';

import { reducer as common, State as CommonState } from '@src/redux/common';

export interface RootState {
  common: CommonState,
}

export const rootReducer = combineReducers<RootState>({
  common,
});