export const SWITCH_AGREEMENT_VALUE = 'SWITCH_AGREEMENT_VALUE';

export type Actions = {
  SWITCH_AGREEMENT_VALUE: {
    type: typeof SWITCH_AGREEMENT_VALUE,
  }
};

export const syncActionCreators = {
  switchAgreementValue: ():
    Actions[typeof SWITCH_AGREEMENT_VALUE] => ({
      type: SWITCH_AGREEMENT_VALUE,
    }),
};