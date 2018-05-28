import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';
import { withRouter } from 'react-router-dom';

import { Registration } from '../components';
// import { syncActionCreators } from '@src/redux/login';

import {
  // IRegistrationFormItemsCollection,
  // IRegistrationFormValidation
} from '@src/interfaces';


interface StateProps {
  registrationView: string,
}

interface DispatchProps {
  // changeRegistrationEmailValue:
  // (payload: IRegistrationFormItemsCollection['email']) => any,
  // changeRegistrationPasswordValue:
  // (payload: IRegistrationFormItemsCollection['password']) => any,
  // changeRegistrationConfirmPasswordValue:
  // (payload: IRegistrationFormItemsCollection['confirm']) => any,
  // updateRecaptchaValue: (payload: string) => any,
  // switchRegistrationAgreementValue: () => any,
  // updateRegistrationFormValidation:
  // (payload: IRegistrationFormValidation) => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    registrationView: 
    (state: RootState) => state.registration.registrationView,
    // registrationFormItemsCollection: (state: RootState) =>
    //   state.login.registrationFormItemsCollection,
    // registrationFormValidation: (state: RootState) =>
    //   state.login.registrationFormValidation,
    // reCaptcha: (state: RootState) => state.login.reCaptcha,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    // changeRegistrationEmailValue:
    //   syncActionCreators.changeRegistrationEmailValue,
    // changeRegistrationPasswordValue:
    //   syncActionCreators.changeRegistrationPasswordValue,
    // changeRegistrationConfirmPasswordValue:
    //   syncActionCreators.changeRegistrationConfirmPasswordValue,
    // updateRecaptchaValue: syncActionCreators.updateRecaptchaValue,
    // switchRegistrationAgreementValue:
    //   syncActionCreators.switchRegistrationAgreementValue,
    // updateRegistrationFormValidation:
    //   syncActionCreators.updateRegistrationFormValidation,
  }, dispatch);

export const RegistrationConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(Registration)
  );
