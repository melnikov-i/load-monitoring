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
import { IFormInputValues } from '@src/core/interfaces';

interface StateProps {
  values: IFormInputValues['values'],
}

interface DispatchProps {}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    values: (state: RootState) => state.formInput.values,
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = 
  (dispatch: Dispatch) => bindActionCreators({}, dispatch);

export const RegistrationFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(RegistrationForm)
  );
