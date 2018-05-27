import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { GreenCheckbox } from '../components';
// import { IFormInputItems, IFormInputChangeValue } from '../interfaces';
import { syncActionCreators } from '../redux';

import {
  // IRegistrationFormItemsCollection,
  // IRegistrationFormValidation
} from '@src/interfaces';


interface StateProps {
  agreement: boolean,
}

interface DispatchProps {
  switchAgreementValue: () => any,  
}

interface OwnProps {
}


const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    agreement: (state: RootState) => state.registration.agreement,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    switchAgreementValue: syncActionCreators.switchAgreementValue,
    
  }, dispatch);

export const GreenCheckboxConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(GreenCheckbox);
