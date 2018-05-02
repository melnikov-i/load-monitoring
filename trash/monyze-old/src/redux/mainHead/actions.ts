export const MAIN_HEADER_BUTTON_SWITCH =
  'MAIN_HEADER_BUTTON_SWITCH';

export type Actions = {
  MAIN_HEADER_BUTTON_SWITCH: {
    type: typeof MAIN_HEADER_BUTTON_SWITCH,
  },
};

// Sync Action Creators
export const syncActionCreators = {
  mainHeaderButtonSwitch: ():
  Actions[typeof MAIN_HEADER_BUTTON_SWITCH] => ({
    type: MAIN_HEADER_BUTTON_SWITCH,
  }),
};