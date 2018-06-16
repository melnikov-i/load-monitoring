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

import { LoginForm } from '../components';

interface StateProps {
  dynamicItemsModel: any,
}

interface DispatchProps {
  // createContext: (payload: any) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    dynamicItemsModel: (state: RootState) =>
      state.formInput.dynamicItemsModel,
    // context: (state: RootState) => state.formInput.context,
    // values: (state: RootState) => state.formInput.values,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    // createContext: syncActionCreators.createContext,
  }, dispatch);

export const LoginFormConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(LoginForm)
);
