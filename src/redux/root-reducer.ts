import { combineReducers } from 'redux';

import { reducer as main, State as MainState } from '@src/redux/main';
import { reducer as login, State as LoginState } from '@src/redux/login';

export interface RootState {
  main: MainState,
  login: LoginState,
}

export const rootReducer = combineReducers<RootState>({
  main,
  login,
});