import { combineReducers } from 'redux';

import { reducer as login, State as LoginState } from './login';
import { reducer as form, State as FormState } from './form';
import { reducer as registration, State as RegistrationState } from './registration';
import { reducer as recovery, State as RecoveryState } from './recovery';
import { reducer as page, State as PageState } from './page';

// import { reducer as main, State as MainState} from './main';
// import { reducer as devices, State as DevicesState } from '@src/redux/devices';
// import { reducer as overview, State as OverviewState } from '@src/redux/overview';
// import { reducer as dashboard, State as DashboardState } from '@src/redux/dashboard';
// import { reducer as mainHead, State as MainHeadState } from '@src/redux/mainHead';


export interface RootState {
  login: LoginState,
  form: FormState,
  registration: RegistrationState,
  recovery: RecoveryState,
  page: PageState,
  // main: MainState,
  // devices: DevicesState,
  // mainHead: MainHeadState,
  // dashboard: DashboardState,
  // overview: OverviewState,
}

export const rootReducer = combineReducers<RootState>({
  login,
  form,
  registration,
  page,
  recovery,
  // main,
  // devices,
  // overview,
  // dashboard,
  // mainHead,
});
