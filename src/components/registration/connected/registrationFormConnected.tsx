import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';
import { withRouter } from 'react-router-dom';

// import { syncActionCreators } from '@src/components/formInput';

import { RegistrationForm } from '../components';

interface StateProps {
  // context: any,
}

interface DispatchProps {
  // createContext: (payload: any) => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    // context: (state: RootState) => state.formInput.context,
    // values: (state: RootState) => state.formInput.values,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = 
  (dispatch: Dispatch) => bindActionCreators({
    // createContext: syncActionCreators.createContext,
  }, dispatch);

export const RegistrationFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(RegistrationForm)
  );
