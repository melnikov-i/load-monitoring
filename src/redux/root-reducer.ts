import { combineReducers } from 'redux';

import { reducer as main, State as MainState/*, Actions as MainActions*/ } from '@src/redux/main';
import { reducer as login, State as LoginState/*, Actions as LoginActions*/ } from '@src/redux/login';
import { reducer as devices, State as DevicesState/*, Actions as DevicesActions*/ } from '@src/redux/devices';
import { reducer as overview, State as OverviewState/*, Actions as OverviewActions*/ } from '@src/redux/overview';
import { reducer as dashboard, State as DashboardState/*, Actions as DashboardActions*/ } from '@src/redux/dashboard';
import { reducer as mainHead, State as MainHeadState/*, Actions as MainHeadActions*/ } from '@src/redux/mainHead';

export interface RootState {
  main: MainState,
  login: LoginState,
  devices: DevicesState,
  overview: OverviewState,
  dashboard: DashboardState,
  mainHead: MainHeadState,
}

export const rootReducer = combineReducers<RootState>({
  main,
  login,
  devices,
  overview,
  dashboard,
  mainHead,
});
