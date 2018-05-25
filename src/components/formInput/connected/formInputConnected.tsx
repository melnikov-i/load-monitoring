import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { FormInput } from '../components';
import { IFormInputItems, IFormInputChangeValue } from '../interfaces';
import { syncActionCreators } from '../redux';

import {
  // IRegistrationFormItemsCollection,
  // IRegistrationFormValidation
} from '@src/interfaces';


interface StateProps {
  value: string;
}

interface DispatchProps {
  changeValue: (payload: IFormInputChangeValue) => any,
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

interface OwnProps {
  formInputItems: IFormInputItems,
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const getValue: Selector<RootState, any> =
  (state: RootState, props: OwnProps) => {
    state.formInput.values[props.formInputItems.storeContext[0]];
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    value: createSelector(
      getValue,
      ( valueItem ) => valueItem,
    )
    // registrationFormItemsCollection: (state: RootState) =>
    //   state.login.registrationFormItemsCollection,
    // registrationFormValidation: (state: RootState) =>
    //   state.login.registrationFormValidation,
    // reCaptcha: (state: RootState) => state.login.reCaptcha,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeValue: syncActionCreators.changeValue,
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

export const FormInputConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(FormInput);
