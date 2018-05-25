import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';
import { withRouter } from 'react-router-dom';

import { RegistrationForm } from '../components';
import { IFormInputValues } from '@src/components/formInput';
// import { syncActionCreators } from '../redux';

import {
  // IRegistrationFormItemsCollection,
  // IRegistrationFormValidation
} from '@src/interfaces';


interface StateProps {
  // agreement: boolean,
  values: IFormInputValues['values'],
}

interface DispatchProps {
  // switchAgreementValue: () => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    values: (state: RootState) => state.formInput.values,
    // agreement: (state: RootState) => state.registration.agreement,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    // switchAgreementValue: syncActionCreators.switchAgreementValue,
  }, dispatch);

export const RegistrationFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(RegistrationForm)
  );
