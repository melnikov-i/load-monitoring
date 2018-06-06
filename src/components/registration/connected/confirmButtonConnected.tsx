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
import { syncActionCreators as formInputActionCreators } from '@src/components/formInput';

import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest } from '../interfaces';

interface StateProps {
  // values: IFormInputValues['values'],
  dynamicItemsModel: any,
  isSelected: boolean,
  reCaptcha: string,
}

interface DispatchProps {
  changeValidationValueInComponents: (payload: any) => any,
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,

  changeValidationValue: (payload: IFormInputValues['values']) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    // values: (state: RootState) => state.formInput.values,
    dynamicItemsModel: (state: RootState) => state.formInput.dynamicItemsModel,
    isSelected: (state: RootState) => state.registration.isSelected,
    reCaptcha: (state: RootState) => state.registration.reCaptcha,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    formInputsChangeValidation: formInputActionCreators.formInputsChangeValidation,
    changeValidationValueInComponents: asyncActionCreators.changeValidationValueInComponents,
    sendRegistrationToAPI: asyncActionCreators.sendRegistrationToAPI,

    changeValidationValue: syncActionCreators.changeValidationValue,
  }, dispatch);

export const ConfirmButtonConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(ConfirmButton);
