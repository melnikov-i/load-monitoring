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

import { ICheckboxDynamic } from '../interfaces';

interface StateProps {
  checkboxDynamic: ICheckboxDynamic,
}

interface DispatchProps {
  switchAgreementValue: () => any,
  switchFocusedValue: () => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    checkboxDynamic: (state: RootState) => state.registration.checkboxDynamic,
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
