import { combineReducers } from 'redux';

import { reducer as cpu, State as CPUState } from '@src/redux/cpu';

export interface RootState {
  cpu: CPUState,
}

export const rootReducer = combineReducers<RootState>({
  cpu,
});