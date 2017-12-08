import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const MainMenuModel =
( state: RootState ) => (
  state.main.MainMenuModel
);

const CompositeFieldSwitch =
( state: RootState ) => (
  state.main.CompositeFieldSwitch
);

export const MainMenuModelSelector = createSelector(
  [MainMenuModel],
  ( MainMenuModel ) => MainMenuModel
);

export const CompositeFieldSwitchSelector = createSelector(
  [CompositeFieldSwitch],
  ( CompositeFieldSwitch ) => CompositeFieldSwitch
);