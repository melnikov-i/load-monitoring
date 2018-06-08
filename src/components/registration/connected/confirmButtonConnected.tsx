import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { ConfirmButton } from '../components';
import { /* syncActionCreators,  */asyncActionCreators } from '../redux';
import { syncActionCreators as formInputActionCreators } from '@src/components/formInput';

// import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest, IReCaptchaDynamic } from '../interfaces';

interface StateProps {
  dynamicItemsModel: any,
  reCaptchaDynamic: IReCaptchaDynamic,
}

interface DispatchProps {
  changeValidationValueInComponents: (payload: any) => any,
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,

  // changeValidationValue: (payload: IFormInputValues['values']) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    dynamicItemsModel: (state: RootState) => state.formInput.dynamicItemsModel,
    reCaptchaDynamic: (state: RootState) => state.registration.reCaptchaDynamic,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    formInputsChangeValidation: formInputActionCreators.formInputsChangeValidation,
    changeValidationValueInComponents: asyncActionCreators.changeValidationValueInComponents,
    sendRegistrationToAPI: asyncActionCreators.sendRegistrationToAPI,

    // changeValidationValue: syncActionCreators.changeValidationValue,
  }, dispatch);

export const ConfirmButtonConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(ConfirmButton);
