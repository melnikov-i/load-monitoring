import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';
import { withRouter } from 'react-router-dom';

import { GreenCheckbox } from '../components';
import { syncActionCreators } from '../redux';

interface StateProps {
  isSelected: boolean,
  isFocused: boolean,
  validation: string,
}

interface DispatchProps {
  switchAgreementValue: () => any,
  switchFocusedValue: () => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isSelected: (state: RootState) => state.registration.isSelected,
    isFocused: (state: RootState) => state.registration.isFocused,
    validation: (state: RootState) => state.registration.validation[0][3],
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    switchAgreementValue: syncActionCreators.switchAgreementValue,
    switchFocusedValue: syncActionCreators.switchFocusedValue,
  }, dispatch);

export const GreenCheckboxConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(GreenCheckbox)
);