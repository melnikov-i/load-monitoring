import { combineReducers } from 'redux';

import { reducer as main, State as MainState } from '@src/redux/main';
import { reducer as login, State as LoginState } from '@src/redux/login';
import { reducer as devices, State as DevicesState } from '@src/redux/devices';
import { reducer as overview, State as OvreviewState } from '@src/redux/overview';

export interface RootState {
  main: MainState,
  login: LoginState,
  devices: DevicesState,
  overview: OvreviewState,
}

export const rootReducer = combineReducers<RootState>({
  main,
  login,
  devices,
  overview,
});