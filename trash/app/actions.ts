export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';

export type Actions = {
  USER_IS_AUTHORIZED: {
    type: typeof USER_IS_AUTHORIZED,
  },
};

export const syncActionCreators = {
  userIsAuthorized: ():
  Actions[typeof USER_IS_AUTHORIZED] => ({
    type: USER_IS_AUTHORIZED,
  }),
};