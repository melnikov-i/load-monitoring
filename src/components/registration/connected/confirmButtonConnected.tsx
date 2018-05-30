import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { ConfirmButton } from '../components';
import { syncActionCreators, asyncActionCreators } from '../redux';
// import {
//   syncActionCreators as formInputActionCreators
// } from '@src/components/formInput'

import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest } from '../interfaces';


interface StateProps {
  values: IFormInputValues['values'],
  agreement: boolean,
  reCaptcha: string,
}

interface DispatchProps {
  changeValidationValue: (payload: IFormInputValues['values']) => any,
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    values: (state: RootState) => state.formInput.values,
    agreement: (state: RootState) => state.registration.agreement,
    reCaptcha: (state: RootState) => state.registration.reCaptcha,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeValidationValue: syncActionCreators.changeValidationValue,
    sendRegistrationToAPI: asyncActionCreators.sendRegistrationToAPI,
  }, dispatch);

export const ConfirmButtonConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(ConfirmButton);
