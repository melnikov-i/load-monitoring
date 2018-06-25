import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { ConfirmButton } from '../components';
import { asyncActionCreators } from '@src/core/redux/registration';
import { 
  RegistrationRequest,
  IReCaptchaDynamic,
  ICheckboxDynamic,
} from '@src/core/interfaces';

interface StateProps {
  dAtributes: any,
  reCaptchaDynamic: IReCaptchaDynamic,
  checkboxDynamic: ICheckboxDynamic,
}

interface DispatchProps {
  changeValidationValueInComponents: (payload: any) => any,
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    dAtributes: (state: RootState) => state.input.dAtributesModel,
    reCaptchaDynamic: (state: RootState) => state.registration.reCaptchaDynamic,
    checkboxDynamic: (state: RootState) => state.registration.checkboxDynamic,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeValidationValueInComponents: asyncActionCreators.changeValidationValueInComponents,
    sendRegistrationToAPI: asyncActionCreators.sendRegistrationToAPI,
  }, dispatch);

export const ConfirmButtonConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(ConfirmButton);
