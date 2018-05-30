import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { GreenCheckbox } from '../components';
import { syncActionCreators } from '../redux';

interface StateProps {
  agreement: boolean,
  validation: string,
}

interface DispatchProps {
  switchAgreementValue: () => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    agreement: (state: RootState) => state.registration.agreement,
    validation: (state: RootState) => state.registration.validation[0][3],
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    switchAgreementValue: syncActionCreators.switchAgreementValue,
  }, dispatch);

export const GreenCheckboxConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(GreenCheckbox);
